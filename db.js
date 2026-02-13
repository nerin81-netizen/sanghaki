
// db.js - QuickMoney v2 Database Definition (Dexie.js)

const db = new Dexie('QuickMoneyDB');

// Define Schema
db.version(1).stores({
    // Transactions: Core financial data
    // Indexed fields: date (for sorting/filtering), writer (for filtering), isRecurring
    transactions: '++id, date, type, category, amount, memo, writer, isRecurring',

    // Recurring Rules: Patterns for automatic generation
    // Indexed fields: day, writer
    recurring_rules: '++id, day, type, category, amount, memo, writer, lastRegisteredMonth',

    // Settings: Key-value store for app configuration
    settings: 'key'
});

// Settings Helper Wrapper (since Dexie is async, we'll need helper functions effectively)
// But for now, just the class definition.

console.log("QuickMoney DB (Dexie) Initialized");

// --- Migration Utility ---
async function migrateFromLocalStorage() {
    try {
        const count = await db.transactions.count();
        if (count > 0) {
            console.log("DB already populated. Skipping migration.");
            return;
        }

        console.log("Starting Migration from LocalStorage...");

        // 1. Transactions
        const rawTx = localStorage.getItem('quickmoney_data');
        if (rawTx) {
            const transactions = JSON.parse(rawTx);
            // Ensure data types are correct for indexing (dates are strings, amounts are numbers)
            const cleanTx = transactions.map(t => ({
                ...t,
                amount: Number(t.amount), // Ensure number
                writer: t.writer || 'husband', // Default
                isRecurring: !!t.isRecurring
            }));
            // Remove 'id' if it conflicts? No, let's keep string IDs if they are unique, 
            // OR let Dexie auto-increment and we drop the old string IDs.
            // Old IDs are timestamps (e.g. "1741..."). Dexie '++id' auto-increments integers.
            // Strategy: Let's KEEP the old IDs but we defined '++id' which means auto-increment.
            // If we provide an ID, Dexie uses it. But our old IDs are strings, Dexie expects numbers for ++id?
            // Actually '++id' usually implies numeric keys.
            // Let's DROP the old ID and let Dexie generate new numeric IDs to be clean.
            // WAIT: If we drop IDs, we lose reference? We don't have relationships yet.
            // SO SAFE TO DROP old IDs and regenerate.

            const toAdd = cleanTx.map(({ id, ...rest }) => rest);
            await db.transactions.bulkAdd(toAdd);
            console.log(`Migrated ${toAdd.length} transactions.`);
        }

        // 2. Recurring Rules
        const rawRules = localStorage.getItem('quickmoney_recurring');
        if (rawRules) {
            const rules = JSON.parse(rawRules);
            const cleanRules = rules.map(({ id, ...rest }) => ({
                ...rest,
                amount: Number(rest.amount),
                writer: rest.writer || 'husband'
            }));
            // await db.transactions.bulkAdd(cleanRules); // WRONG TABLE REMOVED
            await db.recurring_rules.bulkAdd(cleanRules);
            console.log(`Migrated ${cleanRules.length} recurring rules.`);
        }

        // 3. Settings
        const rawSettings = localStorage.getItem('quickmoney_settings');
        if (rawSettings) {
            const settings = JSON.parse(rawSettings);
            // Settings is Key-Value in Dexie.
            // We'll store the WHOLE settings object under a specific key 'user_settings'
            // OR store each key separately?
            // Let's store individual keys from the settings object.
            const keys = Object.keys(settings);
            const settingEntries = keys.map(k => ({ key: k, value: settings[k] }));
            await db.settings.bulkPut(settingEntries);
            console.log(`Migrated settings.`);
        }

        console.log("Migration Complete.");
        alert("데이터가 성공적으로 최신 DB로 이전되었습니다!");

    } catch (error) {
        console.error("Migration Failed:", error);
        alert("데이터 이전 중 오류가 발생했습니다. 개발자 도구를 확인해주세요.");
    }
}
