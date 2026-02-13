/**
 * Quick Money v1.0 Main Logic
 */

// --- Constants & Config ---
// --- Constants & Config ---
const CONFIG = {
    STORAGE_KEY: 'quickMoneyData_v1',
    SETTINGS_KEY: 'quickMoneySettings_v1',
    // Categories moved to state
};

// --- State ---
let state = {
    transactions: [],
    settings: {
        budget: 2000000,
        defaultWriter: 'husband', // Default to husband if null
        bgImage: null,
        serverUrl: 'https://script.google.com/macros/s/AKfycbxLcLAMr90qrBJqjbAW1M5gq71SZCjcIKodY0168teNEqnRhT8SvYPXCPZPuPvYMDwg/exec',
        font: 'default' // Default font setting
    },
    // Default Categories
    categories: {
        expense: [
            '식재료', '식당/카페', '배달', '생활용품', '관리비', '교통',
            '병원/약', '학원/교재', '타인에게주는 용돈/선물', '미용비',
            '여행/문화', '통신 렌탈 구독료', '보험'
        ],
        income: [
            '다정월급/민들레,미사초,단기강의', '정아뜰리에', '부수입', '용돈',
            '미술재료대리구입', '상학월급', '국가지원금'
        ]
    },
    currentDate: new Date(),
    view: 'today',
    filterCategory: 'all',

    input: {
        date: new Date().toISOString().split('T')[0],
        amount: '',
        type: 'expense',
        category: '',
        memo: '',
        writer: 'husband'
    },
    editingId: null, // ID of the transaction being edited
    dashboardFilterType: 'expense', // 'expense' or 'income' for dashboard filter
    recurringRules: [] // List of recurring transaction rules
};

// ... (DOM Elements remain mostly same, will update for new modal)



// ...

function renderCategoryFilter() {
    const container = dom.filterScrollContainer;
    if (!container) return;

    container.innerHTML = '';

    // "All" Button
    const btnAll = document.createElement('button');
    btnAll.className = `cat-chip ${state.filterCategory === 'all' ? 'active' : ''}`;
    btnAll.textContent = '전체';
    btnAll.addEventListener('click', () => {
        state.filterCategory = 'all';
        renderCategoryFilter();
        renderDashboard();
    });
    container.appendChild(btnAll);

    // Categories based on Type
    const categories = state.dashboardFilterType === 'income' ? state.categories.income : state.categories.expense;

    // Apply styling to Type Buttons
    const btnExpense = document.getElementById('btn-filter-expense');
    const btnIncome = document.getElementById('btn-filter-income');

    if (btnExpense && btnIncome) {
        if (state.dashboardFilterType === 'expense') {
            btnExpense.classList.add('active');
            btnIncome.classList.remove('active');
        } else {
            btnExpense.classList.remove('active');
            btnIncome.classList.add('active');
        }
    }

    categories.forEach(cat => {
        const btn = document.createElement('button');
        const isActive = state.filterCategory === cat;
        // Add specific class for coloring if it matches the current type
        const typeClass = state.dashboardFilterType === 'income' ? 'income-chip' : '';

        btn.className = `cat-chip ${typeClass} ${isActive ? 'active' : ''}`;
        btn.textContent = cat;
        btn.addEventListener('click', () => {
            state.filterCategory = cat;
            renderCategoryFilter();
            renderDashboard();
            renderInlineInput(); // Sync Input
        });
        container.appendChild(btn);
    });
}

function setDashboardFilterType(type) {
    state.dashboardFilterType = type;
    state.filterCategory = 'all'; // Reset selection when switching type
    renderCategoryFilter();
    renderDashboard();
    renderInlineInput(); // Update Inline Input options
}

// Global Filter Helper
function getFilteredTransactions() {
    let txs = state.transactions;
    if (state.filterUser && state.filterUser !== 'all') {
        txs = txs.filter(t => t.writer === state.filterUser);
    }
    return txs;
}

function processRecurringTransactions() {
    if (!state.recurringRules || state.recurringRules.length === 0) return;

    const today = new Date();
    const currentYear = today.getFullYear();
    const currentMonth = today.getMonth() + 1; // 1-12
    const currentDay = today.getDate();

    let isUpdated = false;

    state.recurringRules.forEach(rule => {
        const lastRun = rule.lastRegisteredMonth; // 'YYYY-MM'
        const currentMonthStr = `${currentYear}-${String(currentMonth).padStart(2, '0')}`;

        // Check if already run for this month
        if (lastRun === currentMonthStr) return;

        // Check if date condition is met
        const ruleDay = parseInt(rule.day, 10);
        if (currentDay >= ruleDay && !isNaN(ruleDay)) {
            // Safety Check: Avoid Duplicate Logic
            // Check if a transaction with same date, amount, category, memo already exists
            const targetDate = `${currentYear}-${String(currentMonth).padStart(2, '0')}-${String(ruleDay).padStart(2, '0')}`;
            const alreadyExists = state.transactions.some(tx =>
                tx.date === targetDate &&
                tx.amount == rule.amount &&
                tx.category === rule.category &&
                (tx.memo === rule.memo || tx.memo === rule.memo + ' (자동)')
            );

            if (alreadyExists) {
                // Already likely handled by manual entry or previous run
                rule.lastRegisteredMonth = currentMonthStr;
                return;
            }

            const newTx = {
                id: Date.now() + Math.random().toString(36).substr(2, 9),
                date: `${currentYear}-${String(currentMonth).padStart(2, '0')}-${String(ruleDay).padStart(2, '0')}`,
                amount: rule.amount,
                type: rule.type,
                category: rule.category,
                memo: rule.memo + ' (자동)',
                writer: rule.writer,
                isRecurring: true,
                recurringColumn: 'O' // For Sheet Column H
            };

            state.transactions.push(newTx);
            rule.lastRegisteredMonth = currentMonthStr; // Update rule state
            isUpdated = true;
            console.log("Auto-generated recurring transaction:", newTx);

            // Sync to Sheet
            syncToGoogleSheet(newTx);
        }
    });

    if (isUpdated) {
        sortTransactions(); // Ensure order is correct
        saveData();
        renderApp();
        alert('매월 반복 예약된 내역이 자동으로 등록되었습니다.');
    }
}


// --- DOM Elements ---
const dom = {
    currentUserDisplay: document.getElementById('current-user-display'), // Restored
    appContainer: document.querySelector('.app-container'),

    views: {
        today: document.getElementById('view-today'),
        month: document.getElementById('view-month')
    },
    tabs: {
        today: document.getElementById('tab-today'),
        month: document.getElementById('tab-month'),
        analysis: document.getElementById('tab-analysis')
    },

    // Analysis View
    viewAnalysis: document.getElementById('view-analysis'),
    monthDisplayAnl: document.getElementById('month-display-anl'),
    btnPrevAnl: document.getElementById('btn-prev-month-anl'),
    btnNextAnl: document.getElementById('btn-next-month-anl'),
    btnPrevYearAnl: document.getElementById('btn-prev-year-anl'),
    btnNextYearAnl: document.getElementById('btn-next-year-anl'),
    analysisList: document.getElementById('analysis-list'),

    // Dashboard
    monthDisplay: document.getElementById('month-display'),
    btnPrevMonth: document.getElementById('btn-prev-month'),
    btnNextMonth: document.getElementById('btn-next-month'),
    btnPrevYear: document.getElementById('btn-prev-year'),
    btnNextYear: document.getElementById('btn-next-year'),
    btnSearchTag: document.getElementById('btn-search-tag'),
    displayTotal: document.getElementById('display-total'),
    expenseList: document.getElementById('expense-list'),
    comparisonFooter: document.getElementById('comparison-footer'),

    // Inline Input
    inlineDate: document.getElementById('inline-date'),
    inlineAmount: document.getElementById('inline-amount'),
    inlineMemo: document.getElementById('inline-memo'),
    btnInlineSave: document.getElementById('btn-inline-save'),
    btnAddTag: document.getElementById('btn-add-tag'),
    btnInlineRecurring: document.getElementById('btn-inline-recurring'), // New Inline Button
    memoSuggestions: document.getElementById('memo-suggestions'),
    displayTotal: document.getElementById('display-total'),
    // Comparison
    comparisonFooter: document.getElementById('comparison-footer'),
    compTextFull: document.getElementById('comp-text-full'),

    currentUserDisplay: document.getElementById('current-user-display'), // New
    budgetBar: document.getElementById('budget-bar'),
    budgetMsg: document.getElementById('budget-msg'),
    // btnFilterAll removed/integrated
    filterScrollContainer: document.getElementById('filter-scroll-container'),
    listContainer: document.getElementById('list-container'),
    expenseList: document.querySelector('.expense-list'),
    inputServerUrl: document.getElementById('input-server-url'), // New

    // Month Nav
    btnPrev: document.getElementById('btn-prev-month'),
    btnNext: document.getElementById('btn-next-month'),
    btnPrevYear: document.getElementById('btn-prev-year'),
    btnNextYear: document.getElementById('btn-next-year'),

    // Month View Elements
    calendarGrid: document.getElementById('calendar-grid'),
    yearlyList: document.getElementById('yearly-list'),
    monthDisplayCal: document.getElementById('month-display-cal'),
    btnPrevCal: document.getElementById('btn-prev-month-cal'),
    btnNextCal: document.getElementById('btn-next-month-cal'),
    btnPrevYearCal: document.getElementById('btn-prev-year-cal'),
    btnNextYearCal: document.getElementById('btn-next-year-cal'),
    btnExport: document.getElementById('btn-export-excel'),

    // Modals
    modal: document.getElementById('modal-input'),
    fab: document.getElementById('fab-add'),
    closeModal: document.getElementById('close-modal'),
    closeModal: document.getElementById('close-modal'),
    toggleWriter: document.getElementById('toggle-writer'),
    btnRecurring: document.getElementById('btn-recurring'), // New Button
    categoryGrid: document.getElementById('category-grid'), // New

    // Settings
    btnSetting: document.getElementById('btn-setting'),
    modalSetting: document.getElementById('modal-setting'),
    btnBackSetting: document.getElementById('btn-back-setting'), // New Back Button
    closeSetting: document.getElementById('close-setting'),
    inputBgImage: document.getElementById('input-bg-image'),
    btnResetBg: document.getElementById('btn-reset-bg'),
    btnResetData: document.getElementById('btn-reset-data'),
    btnResetData: document.getElementById('btn-reset-data'),
    btnCategorySetting: document.getElementById('btn-category-setting'),
    btnSyncCurrent: document.getElementById('btn-sync-current'),
    btnSync2025: document.getElementById('btn-sync-2025'),
    inputImportCsv: document.getElementById('input-import-csv'),
    btnImportCsv: document.getElementById('btn-import-csv'),
    inputFont: document.getElementById('input-font'),

    // Recurring Manager Modal
    modalRecurring: document.getElementById('modal-recurring'),
    btnBackRecurring: document.getElementById('btn-back-recurring'),
    closeRecurring: document.getElementById('close-recurring'),
    recurringListContainer: document.getElementById('recurring-list-container'),
    btnRecurringSetting: document.getElementById('btn-recurring-setting'),

    // Category Modal
    modalCategory: document.getElementById('modal-category'),
    btnBackCategory: document.getElementById('btn-back-category'), // New Back Button
    closeCategory: document.getElementById('close-category'),
    btnCatExpense: document.getElementById('btn-cat-expense'),
    btnCatIncome: document.getElementById('btn-cat-income'),
    inputNewCat: document.getElementById('input-new-cat'),
    btnAddCat: document.getElementById('btn-add-cat'),
    categoryListContainer: document.getElementById('category-list-container'),

    // Inputs
    inputDate: document.getElementById('input-date'),
    inputAmount: document.getElementById('input-amount'),
    inputMemo: document.getElementById('input-memo'),
    btnTypeExpense: document.getElementById('btn-type-expense'),
    btnTypeIncome: document.getElementById('btn-type-income'),
    keypad: document.getElementById('keypad'),
    btnSave: document.getElementById('btn-save'),

    // Inline Input
    inlineInputContainer: document.getElementById('inline-input-container'),
    inlineDate: document.getElementById('inline-date'), // Added missing element
    inlineCatSelect: document.getElementById('inline-cat-select'),
    inlineAmount: document.getElementById('inline-amount'),
    inlineMemo: document.getElementById('inline-memo'),
    memoSuggestions: document.getElementById('memo-suggestions'),
    btnAddTag: document.getElementById('btn-add-tag'),
    btnSearchTag: document.getElementById('btn-search-tag'),
    btnInlineSave: document.getElementById('btn-inline-save'),

    // Detail Modal
    modalDetail: document.getElementById('modal-detail'),
    btnBackDetail: document.getElementById('btn-back-detail'),
    closeDetail: document.getElementById('close-detail'),
    detailTitle: document.getElementById('detail-title'),
    detailCount: document.getElementById('detail-count'),
    detailTotalAmount: document.getElementById('detail-total-amount'),
    detailListContainer: document.getElementById('detail-list-container')
};

// --- Initialization ---
function init() {
    try {
        loadData();
        applySettings();
        setupEventListeners();
        processRecurringTransactions(); // Check for recurring items

        // Auto-import Initial Data if available (Legacy Import)
        if (typeof INITIAL_DATA !== 'undefined' && Array.isArray(INITIAL_DATA) && INITIAL_DATA.length > 0) {
            const hasImported = localStorage.getItem('initial_data_imported_v2025');
            if (!hasImported) {
                // const confirmImport = confirm(`초기 데이터 ${INITIAL_DATA.length}건을 발견했습니다. 등록하시겠습니까?\n(폴더에 넣어두신 '2025년 가계부' 데이터입니다)`);
                // const confirmImport = confirm(`초기 데이터 ${INITIAL_DATA.length}건을 발견했습니다. 등록하시겠습니까?\n(폴더에 넣어두신 '2025년 가계부' 데이터입니다)`);
                const confirmImport = true; // Force True for Screenshot Task
                if (confirmImport) {
                    const sanitizedData = INITIAL_DATA.map(tx => ({
                        ...tx,
                        amount: Number(tx.amount) || 0
                    }));
                    state.transactions = [...state.transactions, ...sanitizedData];
                    sortTransactions();

                    saveData();
                    localStorage.setItem('initial_data_imported_v2025', 'true');
                    alert('데이터 등록이 완료되었습니다.');
                }
            }
        }
        renderApp();
        renderUserInfo(); // Initial render

        // User Toggle Click
        if (dom.currentUserDisplay) {
            dom.currentUserDisplay.addEventListener('click', toggleDefaultWriter);
        }

        // Explicitly set date on init
        if (dom.inlineDate) setTodayDate();

        // Auto-Sync (Sequential sync for both sheets on startup)
        Promise.all([
            syncFromSheet(0, true, false)
            // syncFromSheet(1, true, false) // 2025 Removed
        ]).then(() => console.log('Full Auto-sync completed'))
            .catch(err => console.error('Auto-sync failed', err));

    } catch (e) {
        console.error("Init Critical Error", e);
        alert('앱 초기화 중 심각한 오류가 발생했습니다: ' + e.message);
    }
}

function loadData() {
    const dataRaw = localStorage.getItem(CONFIG.STORAGE_KEY);
    const settingsRaw = localStorage.getItem(CONFIG.SETTINGS_KEY);

    if (dataRaw) {
        state.transactions = JSON.parse(dataRaw).map(tx => ({
            ...tx,
            amount: Number(tx.amount) || 0,
            date: safeNormalizeDate(tx.date)
        }));
    }
    if (settingsRaw) {
        const savedSettings = JSON.parse(settingsRaw);

        // Priority: Saved Categories -> Default Categories
        if (savedSettings.categories) {
            state.categories = savedSettings.categories;
            delete savedSettings.categories; // Keep settings clean
        }

        state.settings = { ...state.settings, ...savedSettings };
        if (state.settings.serverUrl && dom.inputServerUrl) {
            dom.inputServerUrl.value = state.settings.serverUrl;
        }

        // Restore Filter User
        if (state.settings.filterUser) {
            state.filterUser = state.settings.filterUser;
        } else {
            state.filterUser = 'all';
        }
    } else {
        state.filterUser = 'all';
    }

    // Load Recurring Rules
    const rulesRaw = localStorage.getItem('quickMoneyRecurring_v1');
    if (rulesRaw) {
        try {
            state.recurringRules = JSON.parse(rulesRaw);
        } catch (e) {
            console.error('Failed to parse recurring rules', e);
            state.recurringRules = [];
        }
    } else {
        state.recurringRules = [];
    }
}

function saveData() {
    // Persist filterUser in settings
    state.settings.filterUser = state.filterUser;

    localStorage.setItem(CONFIG.STORAGE_KEY, JSON.stringify(state.transactions));
    localStorage.setItem(CONFIG.SETTINGS_KEY, JSON.stringify(state.settings));
    localStorage.setItem('quickMoneyRecurring_v1', JSON.stringify(state.recurringRules));
}

function applySettings() {
    // BG Image
    if (state.settings.bgImage) {
        dom.appContainer.style.backgroundImage = `url(${state.settings.bgImage})`;
        // Add overlay for readability if needed, but User asked for BG.
    } else {
        dom.appContainer.style.backgroundImage = '';
    }

    if (state.settings.font) {
        const font = state.settings.font;
        if (font === 'system') {
            document.body.style.fontFamily = '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"';
        } else if (font === 'serif') {
            document.body.style.fontFamily = 'serif';
        } else {
            document.body.style.fontFamily = '"Gowun Dodum", sans-serif';
        }
        if (dom.inputFont) dom.inputFont.value = font;
    }
}


function toggleDefaultWriter() {
    // Cycle: All (null/undefined in filter) -> Husband -> Wife -> All
    if (state.filterUser === 'all') {
        state.filterUser = 'husband';
    } else if (state.filterUser === 'husband') {
        state.filterUser = 'wife';
    } else {
        state.filterUser = 'all';
    }

    // Also update default writer logic for new inputs
    // If filter is specific, default writer follows. If 'all', default to 'husband' (or keep prev)
    if (state.filterUser !== 'all') {
        state.settings.defaultWriter = state.filterUser;
    }

    saveData();
    renderUserInfo();
    renderApp(); // Global re-render with filter
}

// --- Specific Logic: User Info ---
// --- Specific Logic: User Info ---
function renderUserInfo() {
    if (!dom.currentUserDisplay) return;

    dom.currentUserDisplay.className = 'user-badge'; // Reset
    const icon = dom.currentUserDisplay.querySelector('.user-icon');
    const name = dom.currentUserDisplay.querySelector('.user-name');

    if (state.filterUser === 'husband') {
        dom.currentUserDisplay.classList.add('husband');
        icon.innerHTML = '<i class="fa-solid fa-user-tie"></i>';
        name.textContent = '상학';
    } else if (state.filterUser === 'wife') {
        dom.currentUserDisplay.classList.add('wife');
        icon.innerHTML = '<i class="fa-solid fa-user"></i>';
        name.textContent = '다정';
    } else {
        // ALL
        dom.currentUserDisplay.classList.add('all'); // Need CSS for this possibly, or just neutral
        icon.innerHTML = '<i class="fa-solid fa-users"></i>';
        name.textContent = '전체';
    }
}


// --- Specific Logic: Analysis ---
function renderAnalysis() {
    const viewAnl = dom.viewAnalysis || document.getElementById('view-analysis');
    if (!viewAnl) return;

    // Elements lookup with fallbacks
    const dispMonth = dom.monthDisplayAnl || document.getElementById('month-display-anl');
    const listContainer = dom.analysisList || document.getElementById('analysis-list');

    if (!dispMonth || !listContainer) {
        console.error('Analysis sub-elements not found');
        return;
    }

    // Update Month Display
    const year = state.currentDate.getFullYear();
    const month = state.currentDate.getMonth() + 1;
    const yearShort = String(year).slice(-2);
    dispMonth.textContent = `${yearShort}년 ${month}월`;

    // Filter Data (String-based comparison for stability)
    const monthStr = `${year}-${String(month).padStart(2, '0')}`;

    // Use Global Filter
    const monthlyData = getFilteredTransactions().filter(tx => {
        return tx.date.startsWith(monthStr) && tx.type === 'expense';
    });

    // Group by Category
    const catTotals = {};
    let totalExpense = 0;

    monthlyData.forEach(tx => {
        const amt = Number(tx.amount) || 0;
        if (!catTotals[tx.category]) catTotals[tx.category] = 0;
        catTotals[tx.category] += amt;
        totalExpense += amt;
    });

    // Convert to Array and Sort
    const sortedCats = Object.entries(catTotals)
        .sort((a, b) => b[1] - a[1]); // Descending

    // Render
    listContainer.innerHTML = '';

    if (sortedCats.length === 0) {
        listContainer.innerHTML = '<div class="no-data">지출 내역이 없습니다.</div>';
        return;
    }

    sortedCats.forEach(([cat, amount]) => {
        const percent = totalExpense > 0 ? ((amount / totalExpense) * 100).toFixed(1) : 0;

        const div = document.createElement('div');
        div.className = 'analysis-item';
        div.innerHTML = `
            <div class="analysis-header">
                <span class="analysis-cat-name">${cat}</span>
                <span class="analysis-amount">${amount.toLocaleString()}원 (${percent}%)</span>
            </div>
            <div class="analysis-bar-bg">
                <div class="analysis-bar-fill" style="width: ${percent}%"></div>
            </div>
        `;

        // Click Event: Open Detail for this category
        div.addEventListener('click', () => {
            const catTxs = monthlyData.filter(tx => tx.category === cat);
            const title = `${year % 100}년 ${month}월 [${cat}] 상세`;
            openDetailModal(title, catTxs);
        });

        listContainer.appendChild(div);
    });
}

// --- Specific Logic: Calendar ---
function renderCalendar() {
    const year = state.currentDate.getFullYear();
    const month = state.currentDate.getMonth();
    const yearShort = String(year).slice(-2);
    dom.monthDisplayCal.textContent = `${yearShort}년 ${month + 1}월`;
    dom.calendarGrid.innerHTML = '';

    // First day of month
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startDay = firstDay.getDay(); // 0=Sun

    // Empty cells
    for (let i = 0; i < startDay; i++) {
        const cell = document.createElement('div');
        dom.calendarGrid.appendChild(cell);
    }

    const todayStr = safeNormalizeDate(new Date());

    for (let d = 1; d <= daysInMonth; d++) {
        const currentDateStr = safeNormalizeDate(new Date(year, month, d));
        const isFuture = currentDateStr > todayStr;

        // Calculate Total (Use Global Filter)
        const dailyTx = getFilteredTransactions().filter(tx => tx.date === currentDateStr && tx.type === 'expense');
        const dailyTotal = dailyTx.reduce((sum, tx) => sum + (Number(tx.amount) || 0), 0);

        const cell = document.createElement('div');
        cell.className = 'cal-cell';
        if (currentDateStr === todayStr) cell.classList.add('today');
        if (isFuture) cell.classList.add('future');

        // Zero Spend Stamp Logic
        let content = `<div class="cal-date">${d}</div>`;
        if (!isFuture && dailyTotal === 0 && new Date(currentDateStr).getDay() !== 0) {
            cell.classList.add('no-spend');
        } else if (dailyTotal > 0) {
            content += `<div class="cal-amount">-${formatKoreanNumber(dailyTotal)}</div>`;
        }

        cell.innerHTML = content;

        // Click Event: Open Detail for that day
        cell.addEventListener('click', () => {
            // Use Global Filter
            const dayTxs = getFilteredTransactions().filter(tx => tx.date === currentDateStr);
            if (dayTxs.length > 0) {
                const displayDate = new Date(currentDateStr);
                const title = `${displayDate.getFullYear() % 100}년 ${displayDate.getMonth() + 1}월 ${displayDate.getDate()}일 내역`;
                openDetailModal(title, dayTxs);
            }
        });

        dom.calendarGrid.appendChild(cell);
    }
}

function renderMonthSummary() {
    // Only if elements exist
    if (!document.getElementById('month-summary-income')) return;

    const year = state.currentDate.getFullYear();
    const month = state.currentDate.getMonth();

    // Use Global Filter
    const monthlyTx = getFilteredTransactions().filter(tx => {
        const d = new Date(tx.date);
        return d.getFullYear() === year && d.getMonth() === month;
    });

    const income = monthlyTx
        .filter(tx => tx.type === 'income')
        .reduce((sum, tx) => sum + (Number(tx.amount) || 0), 0);

    const expense = monthlyTx
        .filter(tx => tx.type === 'expense')
        .reduce((sum, tx) => sum + (Number(tx.amount) || 0), 0);

    const net = income - expense;

    document.getElementById('month-summary-income').textContent = `${income > 0 ? '+' : ''}${formatKoreanNumber(income)}`;
    document.getElementById('month-summary-expense').textContent = `-${formatKoreanNumber(expense)}`;
    document.getElementById('month-summary-net').textContent = `${net.toLocaleString()}원`;

    // Net Color
    const netEl = document.getElementById('month-summary-net');
    if (net > 0) {
        netEl.style.color = '#4CAF50'; // Green
        netEl.textContent = `+${net.toLocaleString()}원`;
    } else if (net < 0) {
        netEl.style.color = '#F44336'; // Red
        netEl.textContent = `${net.toLocaleString()}원`;
    } else {
        netEl.style.color = '#333';
    }
}

// --- Specific Logic: Yearly List ---
function renderYearlyList() {
    dom.yearlyList.innerHTML = '';
    const year = state.currentDate.getFullYear();

    // Loop 1 to 12
    for (let m = 0; m < 12; m++) {
        // Use Global Filter
        const monthlyTx = getFilteredTransactions().filter(tx => {
            const d = new Date(tx.date);
            return d.getFullYear() === year && d.getMonth() === m;
        });

        const income = monthlyTx
            .filter(tx => tx.type === 'income')
            .reduce((sum, tx) => sum + (Number(tx.amount) || 0), 0);

        const expense = monthlyTx
            .filter(tx => tx.type === 'expense')
            .reduce((sum, tx) => sum + (Number(tx.amount) || 0), 0);

        const net = income - expense;

        // Skip empty months? User probably wants to see all or just active?
        // Usually showing all 12 is cleaner for "Yearly Status" or at least up to current month.
        // Let's show all 12.

        const div = document.createElement('div');
        div.className = 'yearly-table-row';
        div.innerHTML = `
            <span class="col-month">${m + 1}월</span>
            <span class="col-income">${income > 0 ? formatKoreanNumber(income) : '-'}</span>
            <span class="col-expense">${expense > 0 ? formatKoreanNumber(expense) : '-'}</span>
            <span class="col-net" style="color:${net > 0 ? '#4CAF50' : (net < 0 ? '#F44336' : '#999')}">
                ${net !== 0 ? (net > 0 ? '+' : '') + formatKoreanNumber(net) : '-'}
            </span>
        `;

        // Interaction: Click to view month details
        div.addEventListener('click', () => {
            state.currentDate.setMonth(m); // Set to selected month
            state.view = 'today'; // Switch to 'Today' (Dashboard) view
            renderApp();
        });

        dom.yearlyList.appendChild(div);
    }
}

// --- Specific Logic: Export ---
function exportToCsv() {
    let csvContent = "data:text/csv;charset=utf-8,\uFEFF"; // BOM
    csvContent += "ID,날짜,타입,카테고리,금액,내용,작성자,반복\n";

    state.transactions.forEach(tx => {
        const row = [
            tx.id,
            tx.date,
            tx.type,
            tx.category,
            tx.amount,
            tx.memo,
            tx.writer,
            tx.recurringColumn || '' // Column H
        ].join(",");
        csvContent += row + "\n";
    });

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `quick_money_backup_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// Helper: Enhanced Sorting (Date DESC, then ID DESC)
function sortTransactions() {
    state.transactions.sort((a, b) => {
        // 1. Date Descending
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        if (dateB - dateA !== 0) return dateB - dateA;

        // 2. ID Descending (Newest first for same date)
        return b.id - a.id;
    });
}


// --- Standard Logic (from Step 2) ---

// --- Standard Logic (from Step 2) ---


// --- Transaction Operations ---
function safeNormalizeDate(dateStr) {
    if (!dateStr) return new Date().toISOString().split('T')[0];
    if (dateStr.includes('T')) return dateStr.split('T')[0];
    return dateStr;
}

function addTransaction() {
    try {
        const amount = Number(state.input.amount) || 0;

        // Validation
        if (!amount || amount <= 0) {
            alert('금액을 입력해주세요.');
            return;
        }

        if (!state.input.category) {
            alert('카테고리를 선택해주세요.');
            return;
        }

        const txData = {
            date: dom.inputDate.value || safeNormalizeDate(new Date()),
            type: state.input.type,
            category: state.input.category,
            amount: amount,
            memo: dom.inputMemo.value,
            writer: dom.toggleWriter.checked ? 'wife' : 'husband',
            isFixed: false
        };

        // Determine Recurring State
        const isRecurring = (dom.btnRecurring && dom.btnRecurring.classList.contains('active'));

        if (state.editingId) {
            // Update existing
            const idx = state.transactions.findIndex(t => t.id === state.editingId);
            if (idx > -1) {
                const oldTx = { ...state.transactions[idx] };
                state.transactions[idx] = {
                    ...state.transactions[idx],
                    ...txData,
                    isRecurring: isRecurring, // Update recurring flag
                    recurringColumn: isRecurring ? 'O' : ''
                };
                const newTx = state.transactions[idx];

                // ADDED: Remove recurring rule if unchecked
                if (!isRecurring) {
                    removeRecurringRule(oldTx);
                }

                // Sync Edit to Sheet
                syncEditToGoogleSheet(oldTx, newTx);
            }
            state.editingId = null;
        } else {
            // Create new
            const newTx = {
                id: Date.now().toString(),
                ...txData,
                isRecurring: isRecurring, // Flag from BUTTON
                recurringColumn: isRecurring ? 'O' : '' // For Sheet Column H
            };
            state.transactions.push(newTx);

            // Sync Insert to Sheet
            syncToGoogleSheet(newTx);
        }

        // Handle Recurring Rule Creation (Common for both New and Edit)
        // If isRecurring is TRUE, we ensure a rule exists.
        // We do NOT strictly delete rules here if unchecked, to avoid accidental data loss of rules
        // unless we have a specific "Manage Rules" UI. 
        // For now, consistent with user request: "Make it automatically registered".
        if (isRecurring) {
            // Simple check to avoid duplicates for the exact same definition
            if (!state.recurringRules) state.recurringRules = [];

            const day = new Date(txData.date).getDate();
            const exists = state.recurringRules.some(r =>
                r.day === day &&
                r.amount === txData.amount &&
                r.category === txData.category &&
                r.memo === txData.memo &&
                r.type === txData.type
            );

            if (!exists) {
                // Parse day safely from YYYY-MM-DD string to avoid timezone issues
                const day = parseInt(txData.date.split('-')[2], 10);
                const rule = {
                    id: 'rule_' + Date.now(),
                    day: day,
                    type: txData.type,
                    category: txData.category,
                    amount: txData.amount,
                    memo: txData.memo,
                    writer: txData.writer,
                    lastRegisteredMonth: txData.date.substring(0, 7) // Store YYYY-MM
                };
                state.recurringRules.push(rule);
                alert('매월 반복 예약이 설정되었습니다.');
            }
        }

        sortTransactions();

        saveData();
        closeInputModal();
        renderApp();

        // Trigger Auto-generation check immediately
        // This ensures if a past rule was added (e.g., last month), this month's is generated now
        processRecurringTransactions();
    } catch (err) {
        console.error('Transaction Error:', err);
        alert('오류 발생: ' + err.message);
    }
}

function renderInlineInput() {
    if (!dom.inlineInputContainer) return;

    // Visibility: Only in 'Today' view
    if (state.view === 'today') {
        dom.inlineInputContainer.style.display = 'block';
    } else {
        dom.inlineInputContainer.style.display = 'none';
        return;
    }

    // Populate Category Select based on Dashboard Filter Type
    const targetCategories = state.dashboardFilterType === 'income' ? state.categories.income : state.categories.expense;

    // Check if we need to re-populate (simplest is to always clear and fill)
    dom.inlineCatSelect.innerHTML = '';

    targetCategories.forEach(cat => {
        const opt = document.createElement('option');
        opt.value = cat;
        opt.textContent = cat;
        dom.inlineCatSelect.appendChild(opt);
    });

    // Sync with Filter
    if (state.filterCategory !== 'all') {
        // If the selected category exists in the new list, select it
        if (targetCategories.includes(state.filterCategory)) {
            dom.inlineCatSelect.value = state.filterCategory;
        }
    }

    // If no value selected (or reset), select first option
    if (!dom.inlineCatSelect.value && dom.inlineCatSelect.options.length > 0) {
        dom.inlineCatSelect.selectedIndex = 0;
    }

    // Set Date if empty
    if (!dom.inlineDate.value) {
        setTodayDate();
    }
}

function setTodayDate() {
    if (dom.inlineDate) dom.inlineDate.value = safeNormalizeDate(new Date());
}

function saveInlineTransaction() {
    const rawVal = dom.inlineAmount.value.replace(/,/g, '');
    const amount = Number(rawVal) || 0;
    const category = dom.inlineCatSelect.value;
    const memo = dom.inlineMemo.value;
    const date = dom.inlineDate.value;
    const isRecurring = dom.btnInlineRecurring && dom.btnInlineRecurring.classList.contains('active');

    if (!amount || amount <= 0) {
        alert('금액을 입력해주세요.');
        return;
    }

    // Determine Type
    let type = 'expense';
    if (state.categories.income.includes(category)) {
        type = 'income';
    }

    // Use currently active profile from header for inline input
    const writer = state.settings.defaultWriter || 'husband';

    const newTx = {
        id: Date.now().toString(),
        date: date,
        type: type,
        category: category,
        amount: amount,
        memo: memo,
        writer: writer,
        isFixed: false,
        isRecurring: isRecurring,
        recurringColumn: isRecurring ? 'O' : ''
    };

    state.transactions.push(newTx);
    sortTransactions();

    // Handle Recurring Rule Creation (Inline)
    if (isRecurring) {
        if (!state.recurringRules) state.recurringRules = [];

        // Parse day safely
        const day = parseInt(date.split('-')[2], 10);

        const exists = state.recurringRules.some(r =>
            r.day === day &&
            r.amount === amount &&
            r.category === category &&
            r.type === type &&
            r.memo === memo
        );

        if (!exists) {
            const rule = {
                id: 'rule_' + Date.now(),
                day: day,
                type: type,
                category: category,
                amount: amount,
                memo: memo,
                writer: writer,
                lastRegisteredMonth: date.substring(0, 7)
            };
            state.recurringRules.push(rule);
            alert('매월 반복 예약이 설정되었습니다.');
        }
    } else {
        removeRecurringRule(newTx);
    }

    saveData();
    renderApp();

    // Reset Input
    dom.inlineAmount.value = '';
    dom.inlineMemo.value = '';
    if (dom.btnInlineRecurring) dom.btnInlineRecurring.classList.remove('active'); // Reset Inline Button

    // Sync to Sheet
    syncToGoogleSheet(newTx);

    // Trigger Recurring Check
    // Trigger Recurring Check
    if (isRecurring) {
        processRecurringTransactions();
    }
}

function deleteTransaction(id) {
    if (!confirm('정말 삭제하시겠습니까?')) return;

    // Find target for sync
    const targetTx = state.transactions.find(tx => tx.id === id);
    if (targetTx) {
        syncDeleteToGoogleSheet(targetTx);
    }

    state.transactions = state.transactions.filter(tx => tx.id !== id);
    saveData();
    renderApp();
}

function renderApp() {
    renderHeader();
    renderInlineInput(); // Added
    renderDashboard();
    renderCalendar();
    renderYearlyList();
}

function renderHeader() {
    const yearShort = String(state.currentDate.getFullYear()).slice(-2);
    dom.monthDisplay.textContent = `${yearShort}년 ${state.currentDate.getMonth() + 1}월`;

    // Robust Lookups
    const viewToday = dom.views.today || document.getElementById('view-today');
    const viewMonth = dom.views.month || document.getElementById('view-month');
    const viewAnl = dom.viewAnalysis || document.getElementById('view-analysis');

    const tabToday = dom.tabs.today || document.getElementById('tab-today');
    const tabMonth = dom.tabs.month || document.getElementById('tab-month');
    const tabAnl = dom.tabs.analysis || document.getElementById('tab-analysis');

    // Reset all
    if (viewToday) viewToday.classList.add('hidden');
    if (viewMonth) viewMonth.classList.add('hidden');
    if (viewAnl) viewAnl.classList.add('hidden');

    if (tabToday) tabToday.classList.remove('active');
    if (tabMonth) tabMonth.classList.remove('active');
    if (tabAnl) tabAnl.classList.remove('active');

    // Activate current
    if (state.view === 'today') {
        if (viewToday) viewToday.classList.remove('hidden');
        if (tabToday) tabToday.classList.add('active');
    } else if (state.view === 'month') {
        if (viewMonth) viewMonth.classList.remove('hidden');
        if (tabMonth) tabMonth.classList.add('active');
        renderCalendar();
        renderMonthSummary();
    } else if (state.view === 'analysis') {
        if (viewAnl) viewAnl.classList.remove('hidden');
        if (tabAnl) tabAnl.classList.add('active');
        renderAnalysis();
    }
}

// Helper: Korean Number Format
function formatKoreanNumber(amount) {
    if (amount === 0) return '0';
    const abs = Math.abs(amount);

    if (abs >= 10000) {
        // Only shorten if it's a clean multiple of 10000 (e.g. 10000 -> 1만, 15000 -> 1.5만 X -> 15,000)
        // actually users usually like 1.5만 for 15000.
        // Let's use clean division check for simple cases?
        // Or just stricter logic: data precision is important.
        // User saw "1.6만" (16000) but value was 15790.

        // Revised Logic: Only use '만' if it's exactly divisible by 1000 (e.g. 1.6만 is okay for 16000).
        // But 15790 / 10000 = 1.579 -> 1.6 (Rounded). Bad.

        // Let's just return toLocaleString() for all values to be safe and clear, 
        // OR only shorten if (abs % 10000 === 0). 
        // 16000 -> 16,000 (Clear). 

        // The user seems to like the '만' format, but accuracy is key.
        // Let's shorten ONLY if remainder is 0.
        if (abs % 10000 === 0) {
            return `${abs / 10000}만`;
        }
    }
    return abs.toLocaleString();
}

function renderDashboard() {

    const year = state.currentDate.getFullYear();
    const month = state.currentDate.getMonth();

    // 1. All monthly data (String-based comparison)
    const monthStr = `${year}-${String(month + 1).padStart(2, '0')}`;
    // Use Global Filter
    const monthlyData = getFilteredTransactions().filter(tx => {
        return tx.date.startsWith(monthStr);
    });

    const totalMonthExpense = monthlyData
        .filter(tx => tx.type === 'expense')
        .reduce((sum, tx) => {
            const val = Number(tx.amount) || 0;
            return Number(sum) + val;
        }, 0);

    // 2. Budget Bar (Based on Total Month Expense)
    const budgetPct = Math.min((totalMonthExpense / state.settings.budget) * 100, 100);
    dom.budgetBar.style.width = `${budgetPct}%`;

    if (budgetPct < 50) {
        dom.budgetBar.style.backgroundColor = '#4CAF50';
        dom.budgetMsg.textContent = "아주 훌륭해요! 👍";
        dom.budgetMsg.style.color = '#4CAF50';
    } else if (budgetPct < 80) {
        dom.budgetBar.style.backgroundColor = '#FF9800';
        dom.budgetMsg.textContent = "조금만 신경 써주세요. 🤔";
        dom.budgetMsg.style.color = '#FF9800';
    } else {
        dom.budgetBar.style.backgroundColor = '#F44336';
        dom.budgetMsg.textContent = "위험! 지출을 줄이세요. 🚨";
        dom.budgetMsg.style.color = '#F44336';
    }

    // 3. Filtered Data (Display & Total)
    let displayData = monthlyData.filter(tx => {
        // Type Filter (Add this check)
        if (state.dashboardFilterType && tx.type !== state.dashboardFilterType) return false;

        // Category Filter
        if (state.filterCategory !== 'all' && tx.category !== state.filterCategory) return false;

        // Search Filter
        if (state.searchQuery) {
            const query = state.searchQuery.toLowerCase();
            const content = (tx.memo || '').toLowerCase();
            const category = (tx.category || '').toLowerCase();
            // Search in Memo or Category
            if (!content.includes(query) && !category.includes(query)) return false;
        }

        return true;
    });

    let totalDisplayAmount = 0;
    const heroLabel = document.querySelector('.hero-label');
    const isIncomeMode = state.dashboardFilterType === 'income';

    if (state.filterCategory !== 'all') {
        const filteredTxs = displayData
            .filter(tx => tx.type === state.dashboardFilterType) // Filter by type
            .reduce((sum, tx) => sum + (Number(tx.amount) || 0), 0);

        totalDisplayAmount = filteredTxs;

        if (heroLabel) {
            const suffix = isIncomeMode ? '수입' : '지출';
            heroLabel.textContent = `이번 달 '${state.filterCategory}' ${suffix}`;
        }
    } else {
        if (state.searchQuery) {
            totalDisplayAmount = displayData
                .filter(tx => tx.type === state.dashboardFilterType) // Filter by type
                .reduce((sum, tx) => {
                    const val = Number(tx.amount) || 0;
                    return Number(sum) + val;
                }, 0);

            if (heroLabel) {
                const suffix = isIncomeMode ? '수입' : '합계';
                heroLabel.textContent = `'${state.searchQuery}' 검색 ${suffix}`;
            }
        } else {
            // Default View (All)
            // Calculate total based on current TYPE (Income or Expense)
            totalDisplayAmount = monthlyData
                .filter(tx => tx.type === state.dashboardFilterType)
                .reduce((sum, tx) => sum + (Number(tx.amount) || 0), 0);

            if (heroLabel) {
                heroLabel.textContent = isIncomeMode ? "이번 달 번 돈" : "이번 달 쓴 돈";
            }
        }
    }

    dom.displayTotal.textContent = `${Number(totalDisplayAmount).toLocaleString()}원`;

    // Update Amount Color
    dom.displayTotal.style.color = isIncomeMode ? 'var(--income-green)' : 'var(--accent-red)';

    // --- Comparison Logic ---\
    if (state.filterCategory === 'all' && !state.searchQuery) { // Only show comparison for Total view for now
        updateComparison(year, month, totalMonthExpense);
        if (dom.comparisonFooter) dom.comparisonFooter.style.display = 'block';
    } else {
        if (dom.comparisonFooter) dom.comparisonFooter.style.display = 'none';
    }

    renderList(displayData);
}

function renderList(listData) {
    dom.expenseList.innerHTML = '';

    // Search Indicator
    if (state.searchQuery) {
        const indicator = document.createElement('div');
        indicator.innerHTML = `
            <span style="color:#555; font-size:0.9rem;">'${state.searchQuery}' 검색 결과</span>
            <button id="btn-clear-search" style="border:none; background:none; color:${state.settings.accentColor || '#333'}; font-weight:bold; margin-left:10px; cursor:pointer;">취소</button>
        `;
        indicator.style.padding = '10px';
        indicator.style.textAlign = 'center';
        indicator.style.borderBottom = '1px solid #eee';

        dom.expenseList.appendChild(indicator);

        indicator.querySelector('#btn-clear-search').addEventListener('click', () => {
            state.searchQuery = '';
            dom.btnSearchTag.classList.remove('active');
            renderDashboard();
        });
    }

    if (listData.length === 0) {
        dom.expenseList.innerHTML += `<div class="empty-msg">내역이 없습니다.</div>`;
        return;
    }

    listData.forEach(tx => {
        const li = document.createElement('li');

        // Determine Writer Info (Class and Display Name)
        let writerClass = '';
        let writerDisplayName = tx.writer || '';

        if (tx.writer === 'husband' || tx.writer === '상학') {
            writerClass = 'writer-husband';
            writerDisplayName = '상학';
        } else if (tx.writer === 'wife' || tx.writer === '다정') {
            writerClass = 'writer-wife';
            writerDisplayName = '다정';
        } else {
            // Fallback for unknown/old data
            writerDisplayName = tx.writer || '미지정';
        }

        li.className = `expense-item ${writerClass}`;

        // Date Formatting
        const dateObj = new Date(tx.date);
        const day = dateObj.getDate().toString().padStart(2, '0');
        const weekdays = ['일', '월', '화', '수', '목', '금', '토'];
        const weekday = weekdays[dateObj.getDay()];

        li.innerHTML = `
            <div class="date-col">
                <span class="day">${day}</span>
                <span class="weekday">${weekday}</span>
            </div>
            <div class="info-col">
                <div class="category-tag">
                    <span class="writer-badge-xs ${writerClass === 'writer-husband' ? 'husband' : (writerClass === 'writer-wife' ? 'wife' : '')}">${writerDisplayName}</span>
                    ${tx.category}
                    ${tx.isRecurring ? '<span class="recurring-badge">매월</span>' : ''}
                </div>
                <div class="memo">${tx.memo || ''}</div>
            </div>
            <div class="amount-col ${tx.type === 'income' ? 'income' : ''}">
                ${tx.type === 'income' ? '+' : '-'}${formatKoreanNumber(tx.amount)}
            </div>
            <div class="action-col">
                 <button class="btn-item-edit"><i class="fa-solid fa-pen"></i></button>
                 <button class="btn-item-del"><i class="fa-solid fa-trash"></i></button>
            </div>
        `;

        // Event Listeners
        // Edit
        li.querySelector('.btn-item-edit').addEventListener('click', (e) => {
            e.stopPropagation();
            openInputModal(tx);
        });

        // Delete
        li.querySelector('.btn-item-del').addEventListener('click', (e) => {
            e.stopPropagation();
            deleteTransaction(tx.id);
        });

        // Row Click (Edit) - Optional, maybe just edit button?
        // User request "Create content with tagline..." implies robust interaction.
        // Let's keep row click as edit too, but careful with buttons.
        li.addEventListener('click', () => openInputModal(tx));

        dom.expenseList.appendChild(li);
    });
}

function updateComparison(currentYear, currentMonth, currentTotal) {
    // 1. Calculate Previous Month Date Range
    // Target: From 1st to Same Day (or last day) of Previous Month
    const today = new Date();
    const isCurrentMonth = (today.getFullYear() === currentYear && today.getMonth() === currentMonth);

    let targetDay = 31; // Default to full month
    if (isCurrentMonth) {
        targetDay = today.getDate();
    } else {
        targetDay = 31;
    }

    // Previous Month Info
    let prevYear = currentYear;
    let prevMonth = currentMonth - 1;
    if (prevMonth < 0) {
        prevMonth = 11;
        prevYear--;
    }

    // Use Global Filter
    const prevMonthData = getFilteredTransactions().filter(tx => {
        const d = new Date(tx.date);
        return d.getFullYear() === prevYear &&
            d.getMonth() === prevMonth &&
            tx.type === 'expense' &&
            d.getDate() <= targetDay;
    });

    const prevTotal = prevMonthData.reduce((sum, tx) => sum + (Number(tx.amount) || 0), 0);

    // Update UI (Single Line)
    if (dom.compTextFull) {
        const diff = currentTotal - prevTotal;
        let msg = '';
        let className = 'comp-highlight';

        if (diff > 0) {
            msg = ` 전월 대비 ${diff.toLocaleString()}원 더 씀 😭`;
            className += ' bad';
        } else if (diff < 0) {
            msg = ` 전월 대비 ${Math.abs(diff).toLocaleString()}원 절약`;
            className += ' good';
        } else {
            msg = ` 전월과 동일`;
        }

        dom.compTextFull.innerHTML = `전월 동기: ${prevTotal.toLocaleString()}원 <span class="${className}">${msg}</span>`;
    }
}



function setupEventListeners() {
    // Header User Toggle
    if (dom.currentUserDisplay) {
        dom.currentUserDisplay.addEventListener('click', toggleDefaultWriter);
        dom.currentUserDisplay.style.cursor = 'pointer'; // Make it look clickable
    }

    // Nav
    dom.btnPrev.addEventListener('click', () => changeMonth(-1));
    dom.btnNext.addEventListener('click', () => changeMonth(1));
    if (dom.btnPrevYear) dom.btnPrevYear.addEventListener('click', () => changeYear(-1));
    if (dom.btnNextYear) dom.btnNextYear.addEventListener('click', () => changeYear(1));

    dom.btnPrevCal.addEventListener('click', () => changeMonth(-1));
    dom.btnNextCal.addEventListener('click', () => changeMonth(1));
    if (dom.btnPrevYearCal) dom.btnPrevYearCal.addEventListener('click', () => changeYear(-1));
    if (dom.btnNextYearCal) dom.btnNextYearCal.addEventListener('click', () => changeYear(1));

    if (dom.btnPrevAnl) dom.btnPrevAnl.addEventListener('click', () => changeMonth(-1));
    if (dom.btnNextAnl) dom.btnNextAnl.addEventListener('click', () => changeMonth(1));
    if (dom.btnPrevYearAnl) dom.btnPrevYearAnl.addEventListener('click', () => changeYear(-1));
    if (dom.btnNextYearAnl) dom.btnNextYearAnl.addEventListener('click', () => changeYear(1));

    // Tabs
    dom.tabs.today.addEventListener('click', () => {
        state.currentDate = new Date(); // Reset to current date
        state.view = 'today';
        renderApp();
    });
    dom.tabs.month.addEventListener('click', () => { state.view = 'month'; renderApp(); });

    if (dom.tabs.analysis) {
        console.log("Analysis Tab Found, adding listener");
        dom.tabs.analysis.addEventListener('click', () => {
            console.log("Analysis Tab Clicked");
            state.view = 'analysis';
            renderApp();
        });
    } else {
        console.error("Analysis Tab NOT Found in DOM");
    }

    // Modals
    dom.fab.addEventListener('click', () => openInputModal(null));
    dom.closeModal.addEventListener('click', closeInputModal);
    dom.modal.addEventListener('click', (e) => { if (e.target === dom.modal) closeInputModal(); });

    dom.btnSetting.addEventListener('click', () => dom.modalSetting.classList.remove('hidden'));
    dom.closeSetting.addEventListener('click', () => dom.modalSetting.classList.add('hidden'));

    // Inputs
    dom.btnTypeExpense.addEventListener('click', () => setInputType('expense'));
    dom.btnTypeIncome.addEventListener('click', () => setInputType('income'));

    // Dashboard Filter Type Toggle
    const btnFilterExpense = document.getElementById('btn-filter-expense');
    const btnFilterIncome = document.getElementById('btn-filter-income');
    if (btnFilterExpense) btnFilterExpense.addEventListener('click', () => setDashboardFilterType('expense'));
    if (btnFilterIncome) btnFilterIncome.addEventListener('click', () => setDashboardFilterType('income'));

    dom.btnSave.addEventListener('click', addTransaction);

    // Inline Input
    if (dom.btnInlineSave) dom.btnInlineSave.addEventListener('click', saveInlineTransaction);
    // Optional: Auto-select filter when changing inline category manually?
    if (dom.inlineCatSelect) {
        dom.inlineCatSelect.addEventListener('change', () => {
            // maybe update filter? or keeping separate is fine.
        });
    }

    // List Filters - Handled in renderCategoryFilter now
    // Auto-comma for Inline Amount
    if (dom.inlineAmount) {
        dom.inlineAmount.addEventListener('input', (e) => {
            let val = e.target.value.replace(/[^0-9]/g, ''); // Remove non-numbers
            if (val) {
                e.target.value = parseInt(val).toLocaleString();
            } else {
                e.target.value = '';
            }
        });
    }

    // Memo Autocomplete
    if (dom.inlineMemo && dom.memoSuggestions) {
        dom.inlineMemo.addEventListener('input', (e) => {
            const query = e.target.value.trim();
            if (query.length < 1) {
                dom.memoSuggestions.classList.add('hidden');
                return;
            }

            // Filter unique memos containing query (Limit 5)


            // Filter unique memos containing query (Limit 5)
            const seen = new Set();
            const relevantMemos = [];

            // Prefer recent transactions
            for (const t of state.transactions) {
                if (relevantMemos.length >= 5) break;
                if (t.memo && t.memo.includes(query) && !seen.has(t.memo)) {
                    seen.add(t.memo);
                    relevantMemos.push(t.memo);
                }
            }

            if (relevantMemos.length > 0) {
                dom.memoSuggestions.innerHTML = '';
                relevantMemos.forEach(memo => {
                    const li = document.createElement('li');
                    li.className = 'suggestion-item';
                    li.textContent = memo;
                    li.addEventListener('click', () => {
                        dom.inlineMemo.value = memo;
                        dom.memoSuggestions.classList.add('hidden');
                    });
                    dom.memoSuggestions.appendChild(li);
                });
                dom.memoSuggestions.classList.remove('hidden');
            } else {
                dom.memoSuggestions.classList.add('hidden');
            }
        });

        // Close suggestions on blur (delayed to allow click)
        dom.inlineMemo.addEventListener('blur', () => {
            setTimeout(() => {
                dom.memoSuggestions.classList.add('hidden');
            }, 200);
        });
    }

    // Hashtag Helper Buttons
    if (dom.btnAddTag) {
        dom.btnAddTag.addEventListener('click', () => {
            dom.inlineMemo.focus();
            const val = dom.inlineMemo.value;
            if (val.length > 0 && !val.endsWith(' ')) {
                dom.inlineMemo.value = val + ' #';
            } else {
                dom.inlineMemo.value = val + '#';
            }
        });
    }

    if (dom.btnSearchTag) {
        dom.btnSearchTag.addEventListener('click', () => {
            const query = dom.inlineMemo.value.trim();
            if (state.searchQuery && state.searchQuery === query) {
                // Toggle OFF if clicking same query
                state.searchQuery = '';
                dom.btnSearchTag.classList.remove('active');
            } else {
                // New Search (or empty to clear?)
                if (query.length > 0) {
                    state.searchQuery = query;
                    dom.btnSearchTag.classList.add('active');
                } else {
                    // Empty input -> Clear search
                    state.searchQuery = '';
                    dom.btnSearchTag.classList.remove('active');
                }
            }
            renderDashboard();
            renderDashboard();
        });
    }

    // Inline Recurring Button
    if (dom.btnInlineRecurring) {
        dom.btnInlineRecurring.addEventListener('click', () => {
            dom.btnInlineRecurring.classList.toggle('active');
        });
    }

    // Modal Recurring Button
    if (dom.btnRecurring) {
        dom.btnRecurring.addEventListener('click', () => {
            dom.btnRecurring.classList.toggle('active');
        });
    }

    // List Filters - Handled in renderCategoryFilter now

    // Splash
    document.querySelectorAll('.profile-btn').forEach(btn => {
        btn.addEventListener('click', () => selectWriter(btn.dataset.writer));
    });

    // Settings
    dom.inputBgImage.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = (evt) => {
            state.settings.bgImage = evt.target.result;
            saveData();
            applySettings();
        };
        reader.readAsDataURL(file);
    });

    dom.btnResetBg.addEventListener('click', () => {
        state.settings.bgImage = null;
        saveData();
        applySettings();
    });

    dom.btnResetData.addEventListener('click', () => {
        if (confirm('정말 모든 데이터를 초기화하시겠습니까? 되돌릴 수 없습니다.')) {
            localStorage.clear();
            state.transactions = [];
            state.settings.defaultWriter = null;
            saveData();
            location.reload();
        }
    });

    // Export
    dom.btnExport.addEventListener('click', exportToCsv);
    if (dom.btnSyncCurrent) dom.btnSyncCurrent.addEventListener('click', () => syncFromSheet(0));
    if (dom.btnSync2025) dom.btnSync2025.addEventListener('click', () => syncFromSheet(1));

    renderCategoryFilter();

    // History API Handler (Universal Modal Controller)
    window.addEventListener('popstate', (event) => {
        const modalState = event.state ? event.state.modal : null;

        // Hide ALL managed modals
        const modals = [dom.modalSetting, dom.modalCategory, dom.modalDetail, dom.modalRecurring];
        modals.forEach(m => { if (m) m.classList.add('hidden'); });

        // Show based on state
        if (modalState === 'settings') {
            if (dom.modalSetting) dom.modalSetting.classList.remove('hidden');
        } else if (modalState === 'category') {
            if (dom.modalCategory) dom.modalCategory.classList.remove('hidden');
        } else if (modalState === 'detail') {
            if (dom.modalDetail) dom.modalDetail.classList.remove('hidden');
        } else if (modalState === 'recurring') {
            if (dom.modalRecurring) dom.modalRecurring.classList.remove('hidden');
        }
    });

    // New Recurring Tab Button
    const btnRecurringTab = document.getElementById('btn-open-recurring-tab');
    if (btnRecurringTab) {
        btnRecurringTab.addEventListener('click', () => {
            openModalWithHistory(dom.modalRecurring, 'recurring');
            renderRecurringManager();
        });
    }
}

// History API Helper
function openModalWithHistory(modalElement, modalName) {
    modalElement.classList.remove('hidden');
    // If opening Category, we might want to ensure Settings is hidden if we want a clean switch,
    // but the Push State creates the "Stack".
    // Pushing state:
    history.pushState({ modal: modalName }, '', '');
}

// Category Manager Events
// Settings Open/Close (History API Integrated)
if (dom.btnSetting) {
    dom.btnSetting.addEventListener('click', () => {
        openModalWithHistory(dom.modalSetting, 'settings');
    });
}

if (dom.closeSetting) {
    dom.closeSetting.addEventListener('click', () => {
        history.back(); // Trigger popstate to close
    });
}

if (dom.btnBackSetting) {
    dom.btnBackSetting.addEventListener('click', () => {
        history.back(); // Trigger popstate to close
    });
}

// Category Settings Open/Close
if (dom.btnCategorySetting) {
    dom.btnCategorySetting.addEventListener('click', () => {
        // Close Settings? No, keep it under? Or Stack?
        // Let's Stack: Push Category State
        dom.modalSetting.classList.add('hidden'); // Optional: Hide previous if we want single layer
        openModalWithHistory(dom.modalCategory, 'category');
    });
}

// Back Button Logic (Category)
// Note: If we navigated Settings -> Category, "Back" needs to go to Settings.
// History Back will handle this if we configured states correctly.
if (dom.btnBackCategory) {
    dom.btnBackCategory.addEventListener('click', () => {
        history.back(); // Will Pop 'category' -> Reveal 'settings' (handled in popstate)
    });
}

if (dom.closeCategory) {
    dom.closeCategory.addEventListener('click', () => {
        // If we want 'Close' to go ALL the way back to main, we might need multiple backs 
        // or just clear UI. But let's stick to simple "Back" for now.
        history.back();
    });
}

// Detail Modal Close
if (dom.closeDetail) {
    dom.closeDetail.addEventListener('click', () => {
        history.back();
    });
}
if (dom.btnBackDetail) {
    dom.btnBackDetail.addEventListener('click', () => {
        history.back();
    });
}

// Recurring Manager Events
if (dom.btnRecurringSetting) {
    dom.btnRecurringSetting.addEventListener('click', () => {
        // Close Settings? No, keep it under? Or Stack?
        // Let's Stack: Push Recurring State
        // dom.modalSetting.classList.add('hidden'); // Optional: Hide previous if we want single layer
        openModalWithHistory(dom.modalRecurring, 'recurring');
        renderRecurringManager();
    });
}

if (dom.btnBackRecurring) {
    dom.btnBackRecurring.addEventListener('click', () => {
        history.back();
    });
}

if (dom.closeRecurring) {
    dom.closeRecurring.addEventListener('click', () => {
        history.back();
    });
}

if (dom.btnCatExpense) {
    dom.btnCatExpense.addEventListener('click', () => {
        dom.btnCatExpense.classList.add('active');
        dom.btnCatIncome.classList.remove('active');
        renderCategoryManagerList('expense');
    });
}

if (dom.btnCatIncome) {
    dom.btnCatIncome.addEventListener('click', () => {
        dom.btnCatIncome.classList.add('active');
        dom.btnCatExpense.classList.remove('active');
        renderCategoryManagerList('income');
    });
}

if (dom.btnAddCat) {
    dom.btnAddCat.addEventListener('click', () => {
        const type = dom.btnCatExpense.classList.contains('active') ? 'expense' : 'income';
        const name = dom.inputNewCat.value.trim();
        if (name) {
            addCategory(type, name);
            dom.inputNewCat.value = '';
            renderCategoryManagerList(type);
            // Also update filter if needed
            renderCategoryFilter();
        }
    });
}

// CSV Import
if (dom.btnImportCsv) {
    dom.btnImportCsv.addEventListener('click', importFromCsv);
}

// Toggle Writer Label
if (dom.toggleWriter) {
    dom.toggleWriter.addEventListener('change', updateWriterLabel);
}

// Font Setting
if (dom.inputFont) {
    dom.inputFont.addEventListener('change', (e) => {
        state.settings.font = e.target.value;
        saveData();
        applySettings();
    });
}

function handleAmountInput(e) {
    // Remove non-digits
    let val = e.target.value.replace(/[^0-9]/g, '');

    // Prevent multiple leading zeros
    if (val.length > 1 && val.startsWith('0')) {
        val = val.substring(1);
    }

    // Update state
    state.input.amount = val ? parseInt(val, 10) : 0;

    // Format display
    e.target.value = val ? parseInt(val, 10).toLocaleString() : '';

    updateSaveButtonState();
}

function updateWriterLabel() {
    const isWife = dom.toggleWriter.checked;
    const modalHeaderH3 = dom.modal.querySelector('.modal-header h3');

    if (modalHeaderH3) {
        if (isWife) {
            modalHeaderH3.textContent = '지출/수입 입력 (다정)';
            modalHeaderH3.style.color = 'var(--accent-pink)';
        } else {
            modalHeaderH3.textContent = '지출/수입 입력 (상학)';
            modalHeaderH3.style.color = 'var(--accent-blue)';
        }
    }
}

function changeMonth(delta) {
    state.currentDate.setMonth(state.currentDate.getMonth() + delta);
    renderApp();
}

function changeYear(delta) {
    state.currentDate.setFullYear(state.currentDate.getFullYear() + delta);
    renderApp();
}

function openInputModal(tx = null) {
    if (tx) {
        state.editingId = tx.id;
        state.input.amount = tx.amount.toString();
        state.input.memo = tx.memo;
        state.input.date = tx.date;
        state.input.type = tx.type;
        const writer = tx.writer;
        dom.toggleWriter.checked = writer === 'wife';

        // Set Recurring Button for Edit
        if (tx.isRecurring && dom.btnRecurring) {
            dom.btnRecurring.classList.add('active');
        } else if (dom.btnRecurring) {
            dom.btnRecurring.classList.remove('active');
        }
    } else {
        state.editingId = null;
        state.input.amount = '';
        state.input.memo = '';
        state.input.date = new Date().toISOString().split('T')[0];
        state.input.type = 'expense';
        const defaultW = state.settings.defaultWriter || 'husband';
        dom.toggleWriter.checked = defaultW === 'wife';

        // Reset Recurring Button
        if (dom.btnRecurring) dom.btnRecurring.classList.remove('active');
    }

    updateWriterLabel();

    dom.inputDate.value = state.input.date;

    // Native Input Formatting
    dom.inputAmount.removeEventListener('input', handleAmountInput);
    dom.inputAmount.addEventListener('input', handleAmountInput);

    // Set initial value
    dom.inputMemo.value = state.input.memo;
    dom.inputAmount.value = state.input.amount ? parseInt(state.input.amount, 10).toLocaleString() : '';

    setInputType(state.input.type);

    // Select correct category
    if (tx) {
        state.input.category = tx.category;
        renderCategoryOptions(state.input.type === 'expense' ? state.categories.expense : state.categories.income);

        // Mark active
        const btns = dom.categoryGrid.querySelectorAll('.cat-btn');
        btns.forEach(btn => {
            if (btn.dataset.value === tx.category) btn.classList.add('active');
        });
    }

    dom.modal.classList.remove('hidden');
    updateSaveButtonState();
}

function closeInputModal() {
    dom.modal.classList.add('hidden');
}

function setInputType(type) {
    state.input.type = type;
    if (type === 'expense') {
        dom.btnTypeExpense.classList.add('active');
        dom.btnTypeIncome.classList.remove('active');
        renderCategoryOptions(state.categories.expense);
        dom.inputAmount.style.color = '#FF5F5F';
    } else {
        dom.btnTypeExpense.classList.remove('active');
        dom.btnTypeIncome.classList.add('active');
        renderCategoryOptions(state.categories.income);
        dom.inputAmount.style.color = '#4CAF50';
    }
}

// --- Helper Functions Restored ---

function updateAmountDisplay() {
    const num = parseInt(state.input.amount);
    dom.inputAmount.value = isNaN(num) ? '' : num.toLocaleString();
    updateSaveButtonState();
}

function updateSaveButtonState() {
    const amount = parseInt(state.input.amount);
    const hasCategory = !!state.input.category;
    const isValid = !isNaN(amount) && amount > 0 && hasCategory;

    if (dom.btnSave) {
        dom.btnSave.disabled = !isValid;
        dom.btnSave.className = 'btn-save'; // reset
        if (isValid) {
            const isWife = dom.toggleWriter.checked;
            dom.btnSave.classList.add(isWife ? 'active-wife' : 'active-husband');
        } else {
            // Optional: remove actives if disabled? CSS :disabled handles it.
            dom.btnSave.classList.remove('active-wife', 'active-husband');
        }
    }
}

function renderCategoryOptions(categories) {
    dom.categoryGrid.innerHTML = '';
    categories.forEach(cat => {
        const btn = document.createElement('button');
        btn.className = 'cat-btn';
        btn.textContent = cat;
        btn.dataset.value = cat;

        // Click Event
        btn.addEventListener('click', () => {
            // Remove active from all
            dom.categoryGrid.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
            // Add to client
            btn.classList.add('active');
            state.input.category = cat;
            updateSaveButtonState();
        });

        dom.categoryGrid.appendChild(btn);
    });
}

// --- Category Management Functions ---
function addCategory(type, name) {
    if (!name) return;
    if (state.categories[type].includes(name)) return;
    state.categories[type].push(name);
    saveData();
}

function deleteCategory(type, name) {
    if (!confirm(`'${name}' 카테고리를 삭제하시겠습니까 ? `)) return;
    state.categories[type] = state.categories[type].filter(c => c !== name);
    saveData();
    renderCategoryFilter();
}

function renderCategoryManagerList(type) {
    const container = dom.categoryListContainer;
    container.innerHTML = '';

    state.categories[type].forEach(cat => {
        const div = document.createElement('div');
        div.className = 'cat-manage-item';
        div.innerHTML = `
            < span > ${cat}</span >
                <button class="btn-del-cat"><i class="fa-solid fa-trash"></i></button>
        `;
        div.querySelector('.btn-del-cat').addEventListener('click', () => {
            deleteCategory(type, cat);
            renderCategoryManagerList(type);
        });
        container.appendChild(div);
    });
}

// --- Recurring Transaction Manager ---
function renderRecurringManager() {
    const container = dom.recurringListContainer;
    if (!container) return;
    container.innerHTML = '';

    // Filter Rules based on Global User Filter
    let rulesToShow = state.recurringRules || [];
    if (state.filterUser && state.filterUser !== 'all') {
        rulesToShow = rulesToShow.filter(r => r.writer === state.filterUser);
    }

    if (rulesToShow.length === 0) {
        container.innerHTML = '<div class="empty-state">반복 내역이 없습니다.</div>';
        return;
    }

    rulesToShow.forEach(rule => {
        const div = document.createElement('div');
        div.className = 'expense-item'; // Reuse existing class for consistent look

        const typeColor = rule.type === 'income' ? 'var(--income-green)' : 'var(--accent-red)';
        const amountStr = Number(rule.amount).toLocaleString();

        div.innerHTML = `
            <div class="date-col">
                <span class="day" style="font-size:0.9rem; color:#666;">매월</span>
                <span class="weekday" style="color:var(--text-main); font-weight:bold;">${rule.day}일</span>
            </div>
            <div class="info-col">
                <div class="category-tag">
                    <span class="writer-badge-xs ${rule.writer === 'wife' ? 'wife' : 'husband'}">${rule.writer === 'wife' ? '다정' : '상학'}</span>
                    ${rule.category}
                </div>
                <div class="memo">${rule.memo}</div>
            </div>
            <div class="amount-col" style="color:${typeColor}">
                ${amountStr}
            </div>
             <div class="action-col">
                 <button class="btn-item-del"><i class="fa-solid fa-trash"></i></button>
            </div>
        `;

        div.querySelector('.btn-item-del').addEventListener('click', () => {
            deleteRecurringRule(rule.id);
        });

        container.appendChild(div);
    });
}

function deleteRecurringRule(id) {
    if (!confirm('정말 이 반복 설정을 삭제하시겠습니까?')) return;
    state.recurringRules = state.recurringRules.filter(r => r.id !== id);
    saveData();
    renderRecurringManager();
}

// Helper to remove rule when transaction is unchecked
function removeRecurringRule(tx) {
    if (!state.recurringRules || state.recurringRules.length === 0) return;
    const day = parseInt(tx.date.split('-')[2], 10);
    const cleanMemo = (tx.memo || '').replace(' (자동)', '').trim();

    state.recurringRules = state.recurringRules.filter(r => {
        const rMemo = (r.memo || '').trim();
        const txMemo = (tx.memo || '').trim();
        return !(r.day === day &&
            String(r.amount) == String(tx.amount) &&
            r.category === tx.category &&
            (rMemo === txMemo || rMemo === cleanMemo) &&
            r.type === tx.type);
    });
}

// --- PWA Service Worker Registration ---
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('sw.js')
            .then(reg => console.log('Service Worker Registered!', reg))
            .catch(err => console.log('Service Worker Registration Failed:', err));
    });
}

// --- Google Sheets Sync ---
// --- Google Sheets Sync Queue Constants ---
const SYNC_DELAY_MS = 1000; // Delay between requests to prevent rate limiting

// --- Sync Helper Functions ---
function addToSyncQueue(payload) {
    if (!state.syncQueue) state.syncQueue = [];
    state.syncQueue.push(payload);
    processSyncQueue();
}

async function processSyncQueue() {
    if (state.isSyncing || !state.syncQueue || state.syncQueue.length === 0) return;

    state.isSyncing = true;
    const item = state.syncQueue.shift();
    const url = state.settings.serverUrl;

    if (!url) {
        state.isSyncing = false;
        return;
    }

    try {
        console.log("Processing Sync Queue Item:", item.action || 'insert');
        await fetch(url, {
            method: 'POST',
            mode: 'no-cors',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(item)
        });
        console.log("Sync item sent successfully");
    } catch (e) {
        console.error("Sync item failed", e);
        // Option: Re-queue or alert? For now, log and move on to prevent blocking
    } finally {
        setTimeout(() => {
            state.isSyncing = false;
            processSyncQueue(); // Process next item
        }, SYNC_DELAY_MS);
    }
}

// --- Google Sheets Sync Wrappers ---
async function syncToGoogleSheet(tx) {
    // Construct Payload for Sheet (Columns A-H)
    const payload = {
        sheetName: '가계부',
        action: 'insert',
        id: String(tx.id),
        date: tx.date,
        type: tx.type,
        category: tx.category,
        amount: tx.amount,
        memo: tx.memo,
        writer: tx.writer,
        recurringColumn: tx.recurringColumn || ''
    };
    addToSyncQueue(payload);
}

async function syncDeleteToGoogleSheet(tx) {
    // Delete action usually needs just ID
    const payload = {
        sheetName: '가계부',
        action: 'delete',
        id: String(tx.id)
    };
    addToSyncQueue(payload);
}

async function syncEditToGoogleSheet(oldTx, newTx) {
    // Edit action needs old.id to find, and new data to overwrite
    const payload = {
        sheetName: '가계부',
        action: 'edit',
        old: { id: String(oldTx.id) },
        new: {
            id: String(newTx.id),
            date: newTx.date,
            type: newTx.type,
            category: newTx.category,
            amount: newTx.amount,
            memo: newTx.memo,
            writer: newTx.writer,
            recurringColumn: newTx.recurringColumn || ''
        }
    };
    addToSyncQueue(payload);
}

// --- CSV Import Features ---
function importFromCsv() {
    const fileInput = dom.inputImportCsv;
    const file = fileInput.files[0];

    if (!file) {
        alert('파일을 선택해주세요.');
        return;
    }

    const reader = new FileReader();
    reader.onload = function (e) {
        const text = e.target.result;
        processCsvData(text);
    };
    reader.onerror = function () {
        alert('파일을 읽는데 실패했습니다.');
    };
    reader.readAsText(file, 'UTF-8'); // Default to UTF-8
}

// --- Constants & Config ---
// --- Constants & Config ---
const SHEET_URLS = [
    'https://docs.google.com/spreadsheets/d/1QyHPeKvhmdcy2skof4L0oXpyciCMQvveje7OJa6XfQw/export?format=csv',
    'https://docs.google.com/spreadsheets/d/1N4lJ3qBg6BrYCzqhdxWzf-P4kjrLVOkGHe766kjDDkc/export?format=csv'
];

// Helper: Safe Date Normalization (Ensures YYYY-MM-DD without timezone shifts)
function safeNormalizeDate(dateInput) {
    if (!dateInput) return '';
    try {
        let d;
        if (typeof dateInput === 'string') {
            // Handle common Excel/Google Sheet formats like "2025. 1. 3" or "2025/01/03"
            const cleaned = dateInput.replace(/\./g, '-').replace(/\s/g, '').replace(/\//g, '-');
            d = new Date(cleaned);
        } else {
            d = new Date(dateInput);
        }

        if (isNaN(d.getTime())) return String(dateInput).split(' ')[0]; // Fallback to raw first part

        const year = d.getFullYear();
        const month = String(d.getMonth() + 1).padStart(2, '0');
        const day = String(d.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    } catch (e) {
        console.warn('Date normalization failed for:', dateInput);
        return String(dateInput);
    }
}

// Global Deduplication Utility (Attribute-based to handle ID-less duplicates)
function deduplicateTransactions() {
    const seen = new Set();
    const unique = [];

    state.transactions.forEach(tx => {
        const normDate = safeNormalizeDate(tx.date);
        const amount = Number(tx.amount) || 0;
        const memo = (tx.memo || '').trim();
        const cat = (tx.category || '미분류').trim();
        const writer = tx.writer || '';

        // Generate a key excluding ID to catch same records with different/missing IDs
        const attrKey = `${normDate}|${tx.type}|${amount}|${cat}|${memo}|${writer}`;

        if (!seen.has(attrKey)) {
            seen.add(attrKey);
            unique.push({ ...tx, date: normDate });
        }
    });

    if (unique.length !== state.transactions.length) {
        console.log(`Deduplicated: ${state.transactions.length} -> ${unique.length} `);
        state.transactions = unique;
    }
}

async function syncFromSheet(sheetIndex = 0, isSilent = false, isFullRefresh = false) {
    if (!isSilent && !confirm(`구글 시트(${sheetIndex === 0 ? '현재' : '2025'}) 자료를 가져오시겠습니까 ? `)) return;

    // Determine target button for feedback
    const btn = sheetIndex === 0 ? dom.btnSyncCurrent : dom.btnSync2025;
    const originalText = btn ? btn.textContent : '가져오기';
    const targetUrl = SHEET_URLS[sheetIndex];

    if (btn && !isSilent) {
        btn.disabled = true;
        btn.innerHTML = '<i class="fa-solid fa-sync fa-spin"></i> 로딩...';
        btn.style.opacity = '0.6';
    }

    try {
        if (!targetUrl) throw new Error('유효한 시트 주소가 없습니다.');

        // Cache Busting: Add timestamp
        const cacheBusterUrl = `${targetUrl}&t=${Date.now()}`;
        console.log('Fetching from index:', sheetIndex, cacheBusterUrl);

        const res = await fetch(cacheBusterUrl);
        if (!res.ok) throw new Error(`시트 접근 실패(${res.status})`);
        const csvText = await res.text();
        if (!csvText || csvText.trim().length < 10) throw new Error('데이터 부족');

        const lines = csvText.split(/\r?\n/).filter(line => line.trim() !== '');
        if (lines.length < 2) throw new Error('데이터 내역이 없습니다.');

        const parseLine = (text) => {
            const arr = [];
            let quote = false;
            let col = '';
            for (let j = 0; j < text.length; j++) {
                const c = text[j];
                if (c === '"') { quote = !quote; continue; }
                if (c === ',' && !quote) { arr.push(col.trim()); col = ''; continue; }
                col += c;
            }
            arr.push(col.trim());
            return arr;
        };

        const rows = lines.map(line => parseLine(line));
        processTransactionData(rows, isSilent, isFullRefresh);

        deduplicateTransactions();
        saveData();
        renderApp();

        if (!isSilent) {
            alert(`${sheetIndex === 0 ? '현재' : '2025년'} 자료 동기화 완료!`);
        }

    } catch (err) {
        console.error('Sheet Sync Failure:', err);
        if (!isSilent) {
            alert('연동 실패: ' + err.message);
        }
    } finally {
        if (btn && !isSilent) {
            btn.disabled = false;
            btn.textContent = originalText;
            btn.style.opacity = '1';
        }
    }
}

function processCsvData(csvText) {
    try {
        const lines = csvText.split(/\r?\n/).filter(line => line.trim() !== '');
        if (lines.length < 2) {
            alert('데이터가 없는 것 같습니다.');
            return;
        }

        // CSV Line Parser
        const parseLine = (text) => {
            const arr = [];
            let quote = false;
            let col = '';
            for (let i = 0; i < text.length; i++) {
                const c = text[i];
                if (c === '"') { quote = !quote; continue; }
                if (c === ',' && !quote) { arr.push(col.trim()); col = ''; continue; }
                col += c;
            }
            arr.push(col.trim());
            return arr;
        };

        const rows = lines.map(line => parseLine(line));
        processTransactionData(rows);
    } catch (err) {
        console.error(err);
        alert('CSV 파싱 오류: ' + err.message);
    }
}
function processTransactionData(rows, isSilent = false, isFullRefresh = false) {
    try {
        const headers = rows[0].map(h => String(h).trim()); // Ensure headers are strings
        console.log('Headers found:', headers);

        // Required headers mapping with fallbacks
        const headerMapping = {
            'ID': ['ID', '번호'],
            '일자': ['일자', '날짜', 'Date'],
            '구분': ['구분', '타입', 'Type'],
            '금액': ['금액', 'Amount', '가액'],
            '카테고리': ['카테고리', '분류', 'Category'],
            '내용': ['내용', '내역', '메모', 'Memo'],
            '작성자': ['작성자', 'Writer', '멤버'],
            '반복': ['반복', 'Recurring', '비고'] // H Column, prioritized '반복'
        };

        const headerMap = {};
        Object.keys(headerMapping).forEach(key => {
            headerMap[key] = headers.findIndex(h => {
                const head = String(h || '').toLowerCase();
                return headerMapping[key].some(alt => head.includes(alt.toLowerCase()));
            });
        });

        // Debug Header Check
        if (headerMap['일자'] === -1 || headerMap['금액'] === -1) {
            console.error('Header detection failed:', headerMap, 'Detected headers:', headers);
            if (!isSilent) {
                alert(`필수 헤더(날짜, 금액)를 찾을 수 없습니다.\n시트의 첫 번째 줄(헤더)을 확인해 주세요.\n\n감지된 헤더: ${headers.join(', ')} `);
            }
            return;
        }

        // Check for swapped Category/Memo
        // Heuristic: Check first 10 rows. Count matches in known categories.
        let catIndex = headerMap['카테고리'];
        let memoIndex = headerMap['내용'];

        let catMatches = 0;
        let memoMatches = 0;
        const allCategories = [...state.categories.expense, ...state.categories.income];

        const sampleSize = Math.min(rows.length, 20);
        for (let i = 1; i < sampleSize; i++) {
            const row = rows[i];
            if (!row) continue;

            const catVal = String(row[catIndex] || '').trim();
            const memoVal = String(row[memoIndex] || '').trim();

            if (catVal && allCategories.includes(catVal)) catMatches++;
            if (memoVal && allCategories.includes(memoVal)) memoMatches++;
        }

        console.log(`Column Validity Check: CatMatches = ${catMatches}, MemoMatches = ${memoMatches} `);

        if (memoMatches > catMatches) {
            console.warn("Detected Swapped Category/Memo columns. Swapping them.");
            const temp = headerMap['카테고리'];
            headerMap['카테고리'] = headerMap['내용'];
            headerMap['내용'] = temp;
        }

        let newTransactions = [];
        let successCount = 0;
        let failCount = 0;
        let skipCount = 0;
        let reasons = new Set();

        const writer = state.settings.defaultWriter || 'husband';

        // Build duplicate check sets
        // If Full Refresh, we ignore existing state for inclusion check (we will replace it later)
        // But we still need to track duplicates WITHIN the new batch.
        const existingIdSet = isFullRefresh ? new Set() : new Set(state.transactions.map(tx => String(tx.id)));
        const existingAttrSet = isFullRefresh ? new Set() : new Set(state.transactions.map(tx => {
            const d = safeNormalizeDate(tx.date);
            const a = Number(tx.amount) || 0;
            const m = (tx.memo || '').trim();
            const c = (tx.category || '미분류').trim();
            const w = tx.writer || '';
            return `${d}|${tx.type}|${a}|${c}|${m}|${w}`;
        }));

        // Valid ID/Attr tracking for the current batch to prevent internal duplicates in CSV
        const currentBatchIds = new Set();

        for (let i = 1; i < rows.length; i++) {
            const row = rows[i];
            // Skip empty rows (flexible check)
            if (!row || row.length === 0 || (row.length === 1 && !row[0])) continue;

            const rawId = row[headerMap['ID']] || '';
            const rawDate = row[headerMap['일자']] || '';
            const rawType = row[headerMap['구분']] || '';
            const rawAmount = row[headerMap['금액']] || '';
            const rawCategory = row[headerMap['카테고리']] || '';
            const rawMemo = row[headerMap['내용']] || '';

            // 1. Date Validation (Handle ISO Strings from JSON)

            // 1. Date Validation
            let validDate = safeNormalizeDate(rawDate);
            if (!validDate || isNaN(Date.parse(validDate))) {
                failCount++;
                reasons.add(`날짜 오류(${rawDate})`);
                continue;
            }

            // 2. Type Mapping
            let type = 'expense';
            const typeStr = String(rawType);
            if (typeStr.includes('수입')) {
                type = 'income';
            }

            // 3. Amount
            const cleanAmount = String(rawAmount).replace(/,/g, '').replace(/"/g, '');
            const amount = parseInt(cleanAmount);
            if (isNaN(amount) || cleanAmount === '') {
                if (rawAmount) {
                    failCount++;
                    reasons.add(`금액 오류(${rawAmount})`);
                }
                continue;
            }

            // 4. Writer Mapping
            const rawWriter = headerMap['작성자'] !== -1 ? String(row[headerMap['작성자']] || '').trim() : '';
            // 5. Duplicate Check
            // A. Check for identical content FIRST (Robust Dedup)
            const internalWriter = (rawWriter === '다정' || rawWriter === 'wife') ? 'wife' :
                ((rawWriter === '상학' || rawWriter === 'husband') ? 'husband' : writer);

            const attrKey = `${validDate}|${type}|${amount}|${rawCategory || '미분류'}|${(rawMemo || '').trim()}|${internalWriter}`;
            if (existingAttrSet.has(attrKey)) {
                skipCount++;
                continue;
            }

            // B. ID Collision Handling
            // Check Global Set (if valid) OR Local Batch Set
            let finalId = rawId ? parseInt(rawId) : (Date.now() + i);
            const strId = String(finalId);

            if ((rawId && existingIdSet.has(strId)) || currentBatchIds.has(strId)) {
                // Collision detected: Same ID, Different Content.
                // Verify if it's really a collision or just same ID re-used by sheet logic error.
                // We must treat it as a new transaction to avoid data loss.
                // console.warn(`Duplicate ID Collision: ${rawId} has new content. Generating new ID.`);
                finalId = Date.now() + Math.floor(Math.random() * 1000000) + i;
            }

            currentBatchIds.add(String(finalId));

            // 6. Push to newTransactions

            // Recurring Check (Column H)
            const recurringVal = headerMap['반복'] !== -1 ? String(row[headerMap['반복']] || '').trim() : '';
            const isRecurring = (recurringVal === 'O' || recurringVal === 'o' || recurringVal === 'TRUE' || recurringVal === 'true' || recurringVal === '자동');

            newTransactions.push({
                id: String(finalId),
                date: validDate,
                type: type,
                category: rawCategory ? rawCategory : '미분류',
                amount: amount,
                memo: rawMemo,
                writer: internalWriter,
                isRecurring: isRecurring,
                recurringColumn: isRecurring ? 'O' : ''
            });
            successCount++;
        }

        if (successCount === 0) {
            if (!isSilent) {
                if (skipCount > 0) {
                    alert(`모든 데이터(${skipCount}건)가 이미 등록되어 있습니다.`);
                } else {
                    const reasonStr = Array.from(reasons).join('\n').substring(0, 150);
                    alert(`가져올 수 있는 데이터가 없습니다.\n실패 원인(예시): \n${reasonStr}...`);
                }
            }
            return;
        }

        // Merge
        // Merge or Replace
        // Merge
        // Merge or Replace
        if (isFullRefresh) {
            // Preserve Local Metadata (isRecurring, isFixed) before overwriting
            // We map valid IDs from the NEW data to the OLD data to see if we should keep flags
            // But wait, the IDs in CSV are the master.
            // If the ID matches, we restore the flags.
            const localMetaMap = new Map();
            state.transactions.forEach(tx => {
                localMetaMap.set(String(tx.id), { isRecurring: tx.isRecurring, isFixed: tx.isFixed });
            });

            // Restore flags to newTransactions
            newTransactions = newTransactions.map(tx => {
                const meta = localMetaMap.get(String(tx.id));
                if (meta) {
                    return { ...tx, isRecurring: meta.isRecurring, isFixed: meta.isFixed };
                }
                return tx;
            });

            state.transactions = newTransactions;
        } else {
            // Append missing only
            state.transactions = [...state.transactions, ...newTransactions];
        }

        sortTransactions();

        saveData();
        renderApp();
        if (!isSilent) {
            alert(`${successCount}건 성공!(${skipCount}건 중복 제외, ${failCount}건 실패)`);
        }

        if (dom.inputImportCsv) dom.inputImportCsv.value = '';

    } catch (err) {
        console.error(err);
        alert('데이터 처리 중 오류: ' + err.message);
    }
}

// --- Detail Modal Functions ---
function openDetailModal(title, data) {
    if (!dom.modalDetail) return;

    dom.detailTitle.textContent = title;
    dom.detailCount.textContent = `${data.length}건`;
    const total = data.reduce((sum, tx) => sum + (Number(tx.amount) || 0), 0);
    dom.detailTotalAmount.textContent = `${total.toLocaleString()}원`;

    // Render Table inside Modal
    dom.detailListContainer.innerHTML = '';
    dom.detailListContainer.style.padding = '0'; // Flat look for table

    if (data.length === 0) {
        dom.detailListContainer.innerHTML = '<div class="detail-no-data">내역이 없습니다.</div>';
    } else {
        const table = document.createElement('table');
        table.className = 'detail-table-container';

        table.innerHTML = `
            <thead>
                <tr>
                    <th class="col-date">일자</th>
                    <th class="col-cat">분류</th>
                    <th class="col-memo">내용</th>
                    <th class="col-amount">금액</th>
                    <th class="col-writer">등</th>
                </tr>
            </thead>
            <tbody></tbody>
        `;

        const tbody = table.querySelector('tbody');
        data.forEach(tx => {
            const tr = document.createElement('tr');

            // Date formatting (M/D)
            let dateStr = tx.date;
            if (tx.date.includes('-')) {
                const parts = tx.date.split('-');
                dateStr = `${parseInt(parts[1])}/${parseInt(parts[2])}`;
            }

            const writerInitial = tx.writer === 'wife' ? '다' : '상';
            const writerClass = tx.writer === 'wife' ? 'wife' : 'husband';
            const amountClass = tx.type === 'expense' ? 'expense' : 'income';

            tr.innerHTML = `
                <td class="col-date">${dateStr}</td>
                <td class="col-cat">${tx.category}</td>
                <td class="col-memo">${tx.memo || '-'}</td>
                <td class="col-amount ${amountClass}">${Number(tx.amount).toLocaleString()}</td>
                <td class="col-writer">
                    <span class="writer-tag-s ${writerClass}">${writerInitial}</span>
                </td>
            `;
            tbody.appendChild(tr);
        });

        dom.detailListContainer.appendChild(table);
    }

    openModalWithHistory(dom.modalDetail, 'detail');
}

function cleanupDuplicates() {
    const uniqueKeys = new Set();
    const cleanTransactions = [];
    let duplicatesRemoved = 0;

    // Process from newest to oldest (so we ideally keep the latest or oldest? 
    // Actually, to remove "auto-generated duplicates" caused by race conditions, 
    // we should iterate and keep the FIRST one we encounter, effectively removing subsequent matches.

    // Sort logic in app pushes new items to end. 
    // If we have [Manual (index 10), Auto (index 11)], both with same data.
    // If we keep the first valid one we see.

    // Let's use existing transactions array.
    state.transactions.forEach(tx => {
        // Normalizing key: Date|Amount|Category|Writer|Memo-Base
        // Memo handling: Remove " (자동)" suffix for comparison to treat manual & auto as same event if user desires
        // The user asked "If there are duplicates, can it delete them?". 
        // Screenshot showed identical items.

        const memoBase = (tx.memo || '').replace(' (자동)', '').trim();
        const key = `${tx.date}|${tx.amount}|${tx.category}|${tx.writer}|${memoBase}`;

        if (!uniqueKeys.has(key)) {
            uniqueKeys.add(key);
            cleanTransactions.push(tx);
        } else {
            duplicatesRemoved++;
        }
    });

    if (duplicatesRemoved > 0) {
        console.log(`Removed ${duplicatesRemoved} duplicates.`);
        state.transactions = cleanTransactions;
        saveData();
    }
}


//Start
cleanupDuplicates();
init();
