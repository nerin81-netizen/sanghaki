const INITIAL_DATA = [
  {
    "id": 1767417258209,
    "date": "2025-01-01",
    "type": "expense",
    "category": "용돈",
    "amount": 6000,
    "memo": "지혁가인",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258210,
    "date": "2025-01-02",
    "type": "expense",
    "category": "애플클라우드",
    "amount": 1100,
    "memo": "통신 렌탈 구독료",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258211,
    "date": "2025-01-04",
    "type": "expense",
    "category": "카카오페이-조유하",
    "amount": 40000,
    "memo": "식당/카페",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258212,
    "date": "2025-01-04",
    "type": "expense",
    "category": "한도대출이자",
    "amount": 16808,
    "memo": "이자/수수료",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258213,
    "date": "2025-01-06",
    "type": "income",
    "category": "정아뜰리에",
    "amount": 398000,
    "memo": "정아뜰리에",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258215,
    "date": "2025-01-06",
    "type": "expense",
    "category": "영경쭌모임",
    "amount": 20000,
    "memo": "모임회비",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258216,
    "date": "2025-01-06",
    "type": "expense",
    "category": "삼성생명보험",
    "amount": 54797,
    "memo": "보험",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258217,
    "date": "2025-01-07",
    "type": "expense",
    "category": "카카오페이-다영",
    "amount": 20000,
    "memo": "-",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258218,
    "date": "2025-01-09",
    "type": "income",
    "category": "권미란",
    "amount": 38000,
    "memo": "미술재료대리구입",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258219,
    "date": "2025-01-09",
    "type": "income",
    "category": "카카오페이-다영",
    "amount": 31500,
    "memo": "부수입",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258220,
    "date": "2025-01-10",
    "type": "expense",
    "category": "카카오페이-치킨선물",
    "amount": 28700,
    "memo": "타인에게주는 용돈/선물",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258221,
    "date": "2025-01-11",
    "type": "expense",
    "category": "당근-아이패드",
    "amount": 470000,
    "memo": "사업비",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258222,
    "date": "2025-01-12",
    "type": "expense",
    "category": "네이버-아이패드케이스",
    "amount": 1584,
    "memo": "생활용품",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258223,
    "date": "2025-01-12",
    "type": "income",
    "category": "당근-아이패드2세대",
    "amount": 500000,
    "memo": "부수입",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258224,
    "date": "2025-01-16",
    "type": "income",
    "category": "카카오페이-다영-흑염소",
    "amount": 35000,
    "memo": "부수입",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258225,
    "date": "2025-01-19",
    "type": "expense",
    "category": "네이버-레고부품",
    "amount": 8880,
    "memo": "지혁가인",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258226,
    "date": "2025-01-20",
    "type": "income",
    "category": "카카오페이-다영-그린플레이트",
    "amount": 50000,
    "memo": "부수입",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258227,
    "date": "2025-01-21",
    "type": "income",
    "category": "카카오페이-다영",
    "amount": 64000,
    "memo": "부수입",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258228,
    "date": "2025-01-23",
    "type": "expense",
    "category": "네이버-미술붓",
    "amount": 14500,
    "memo": "미술재료대리구입",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258229,
    "date": "2025-01-23",
    "type": "expense",
    "category": "카카오페이-상학",
    "amount": 100000,
    "memo": "-",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258230,
    "date": "2025-01-24",
    "type": "income",
    "category": "아동수당",
    "amount": 100000,
    "memo": "국가지원금",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258231,
    "date": "2025-01-24",
    "type": "income",
    "category": "급여",
    "amount": 1600000,
    "memo": "상학월급",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258232,
    "date": "2025-01-27",
    "type": "income",
    "category": "당근-육수통",
    "amount": 5000,
    "memo": "부수입",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258233,
    "date": "2025-01-29",
    "type": "income",
    "category": "카카오페아-다영-레고정리박스",
    "amount": 8000,
    "memo": "부수입",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258234,
    "date": "2025-01-30",
    "type": "income",
    "category": "당근-레고포르쉐",
    "amount": 70000,
    "memo": "부수입",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258235,
    "date": "2025-01-31",
    "type": "income",
    "category": "유설라",
    "amount": 200000,
    "memo": "부수입",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258236,
    "date": "2025-02-01",
    "type": "income",
    "category": "당근-77000,7000",
    "amount": 84000,
    "memo": "부수입",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258237,
    "date": "2025-02-02",
    "type": "expense",
    "category": "애플클라우드",
    "amount": 1100,
    "memo": "통신 렌탈 구독료",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258238,
    "date": "2025-02-04",
    "type": "expense",
    "category": "하머니-스테이봄",
    "amount": 26505,
    "memo": "식당/카페",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258239,
    "date": "2025-02-05",
    "type": "expense",
    "category": "용돈",
    "amount": 6000,
    "memo": "지혁가인",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258240,
    "date": "2025-02-06",
    "type": "income",
    "category": "오영희,김마리아",
    "amount": 41900,
    "memo": "미술재료대리구입",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258241,
    "date": "2025-02-06",
    "type": "expense",
    "category": "하머니-쿠우쿠우",
    "amount": 83328,
    "memo": "식당/카페",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258242,
    "date": "2025-02-08",
    "type": "expense",
    "category": "한도대출이자",
    "amount": 25889,
    "memo": "이자/수수료",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258243,
    "date": "2025-02-08",
    "type": "expense",
    "category": "하머니-차이나중국집",
    "amount": 65100,
    "memo": "식당/카페",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258244,
    "date": "2025-02-09",
    "type": "expense",
    "category": "네이버-미술재료",
    "amount": 50700,
    "memo": "미술재료대리구입",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258245,
    "date": "2025-02-09",
    "type": "expense",
    "category": "당근-코렐식기세트",
    "amount": 40000,
    "memo": "생활용품",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258246,
    "date": "2025-02-10",
    "type": "income",
    "category": "미분류",
    "amount": 99500,
    "memo": "정아뜰리에",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258247,
    "date": "2025-02-10",
    "type": "income",
    "category": "미분류",
    "amount": 99500,
    "memo": "정아뜰리에",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258248,
    "date": "2025-02-10",
    "type": "income",
    "category": "미분류",
    "amount": 99500,
    "memo": "정아뜰리에",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258249,
    "date": "2025-02-10",
    "type": "income",
    "category": "미분류",
    "amount": 99750,
    "memo": "정아뜰리에",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258250,
    "date": "2025-02-10",
    "type": "expense",
    "category": "네이버-하겐다즈",
    "amount": 31693,
    "memo": "식재료",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258251,
    "date": "2025-02-10",
    "type": "expense",
    "category": "삼성생명보험",
    "amount": 54797,
    "memo": "보험",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258252,
    "date": "2025-02-11",
    "type": "income",
    "category": "당근-오리발",
    "amount": 15000,
    "memo": "부수입",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258253,
    "date": "2025-02-11",
    "type": "expense",
    "category": "하머나-떡집",
    "amount": 16647,
    "memo": "타인에게주는 용돈/선물",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258254,
    "date": "2025-02-11",
    "type": "expense",
    "category": "하머니-떡집",
    "amount": 14601,
    "memo": "타인에게주는 용돈/선물",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258255,
    "date": "2025-02-13",
    "type": "income",
    "category": "업비트",
    "amount": 800000,
    "memo": "부수입",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258256,
    "date": "2025-02-13",
    "type": "expense",
    "category": "지혁이영어",
    "amount": 170000,
    "memo": "학원/교재",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258257,
    "date": "2025-02-13",
    "type": "expense",
    "category": "하머니-고봉민",
    "amount": 8928,
    "memo": "식당/카페",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258258,
    "date": "2025-02-14",
    "type": "income",
    "category": "오미애",
    "amount": 38800,
    "memo": "미술재료대리구입",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258259,
    "date": "2025-02-15",
    "type": "income",
    "category": "카카오페이-다영-술값",
    "amount": 50000,
    "memo": "부수입",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258260,
    "date": "2025-02-17",
    "type": "income",
    "category": "업비트",
    "amount": 700000,
    "memo": "부수입",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258261,
    "date": "2025-02-17",
    "type": "income",
    "category": "당근-빔",
    "amount": 20000,
    "memo": "부수입",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258262,
    "date": "2025-02-18",
    "type": "expense",
    "category": "하머니-김가네",
    "amount": 13950,
    "memo": "식당/카페",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258263,
    "date": "2025-02-20",
    "type": "income",
    "category": "당근-의사어벤져스책",
    "amount": 90000,
    "memo": "부수입",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258264,
    "date": "2025-02-20",
    "type": "income",
    "category": "당근-풋살화",
    "amount": 5000,
    "memo": "부수입",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258265,
    "date": "2025-02-21",
    "type": "income",
    "category": "당근",
    "amount": 43000,
    "memo": "부수입",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258266,
    "date": "2025-02-22",
    "type": "income",
    "category": "당근",
    "amount": 5000,
    "memo": "부수입",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258267,
    "date": "2025-02-22",
    "type": "income",
    "category": "당근-장난감",
    "amount": 8000,
    "memo": "부수입",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258268,
    "date": "2025-02-23",
    "type": "income",
    "category": "당근-토이다블럭",
    "amount": 10000,
    "memo": "부수입",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258269,
    "date": "2025-02-24",
    "type": "income",
    "category": "롯데카드환불",
    "amount": 12000,
    "memo": "부수입",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258270,
    "date": "2025-02-25",
    "type": "income",
    "category": "급여",
    "amount": 2000000,
    "memo": "상학월급",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258271,
    "date": "2025-02-25",
    "type": "income",
    "category": "아동수당",
    "amount": 100000,
    "memo": "국가지원금",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258272,
    "date": "2025-02-25",
    "type": "income",
    "category": "상학",
    "amount": 300000,
    "memo": "부수입",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258273,
    "date": "2025-02-26",
    "type": "expense",
    "category": "카카오페이-다영-캣플",
    "amount": 36000,
    "memo": "지혁가인",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258274,
    "date": "2025-02-26",
    "type": "income",
    "category": "당근-이고진워킹머신",
    "amount": 50000,
    "memo": "부수입",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258275,
    "date": "2025-02-27",
    "type": "expense",
    "category": "카카오페이-다영-족발",
    "amount": 30000,
    "memo": "배달",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258276,
    "date": "2025-02-28",
    "type": "expense",
    "category": "카카오페이-",
    "amount": 10000,
    "memo": "기타",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258277,
    "date": "2025-02-28",
    "type": "expense",
    "category": "카카오페이-다영",
    "amount": 16000,
    "memo": "식당/카페",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258278,
    "date": "2025-03-01",
    "type": "expense",
    "category": "하머니-시루떡집",
    "amount": 7896,
    "memo": "식재료",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258279,
    "date": "2025-03-02",
    "type": "expense",
    "category": "애플클라우드",
    "amount": 1100,
    "memo": "통신 렌탈 구독료",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258280,
    "date": "2025-03-03",
    "type": "income",
    "category": "당근-수납장",
    "amount": 20000,
    "memo": "부수입",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258281,
    "date": "2025-03-05",
    "type": "expense",
    "category": "삼성생명보험",
    "amount": 54797,
    "memo": "보험",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258282,
    "date": "2025-03-05",
    "type": "expense",
    "category": "영경쭌모임",
    "amount": 20000,
    "memo": "모임회비",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258283,
    "date": "2025-03-05",
    "type": "expense",
    "category": "용돈",
    "amount": 6000,
    "memo": "지혁가인",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258284,
    "date": "2025-03-06",
    "type": "income",
    "category": "김마리아",
    "amount": 2000,
    "memo": "미술재료대리구입",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258285,
    "date": "2025-03-06",
    "type": "income",
    "category": "하남종합운동장 환불",
    "amount": 46200,
    "memo": "부수입",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258286,
    "date": "2025-03-06",
    "type": "expense",
    "category": "카카오페이-다영-드로게리아",
    "amount": 20000,
    "memo": "식당/카페",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258287,
    "date": "2025-03-07",
    "type": "income",
    "category": "미분류",
    "amount": 99600,
    "memo": "정아뜰리에",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258288,
    "date": "2025-03-07",
    "type": "income",
    "category": "미분류",
    "amount": 99600,
    "memo": "정아뜰리에",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258289,
    "date": "2025-03-07",
    "type": "income",
    "category": "미분류",
    "amount": 99850,
    "memo": "정아뜰리에",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258290,
    "date": "2025-03-07",
    "type": "income",
    "category": "미분류",
    "amount": 99600,
    "memo": "정아뜰리에",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258291,
    "date": "2025-03-07",
    "type": "expense",
    "category": "카카오페이-다영-코스트코",
    "amount": 90000,
    "memo": "식재료",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258292,
    "date": "2025-03-07",
    "type": "expense",
    "category": "하머니-가인교정치과",
    "amount": 186000,
    "memo": "병원/약",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258293,
    "date": "2025-03-08",
    "type": "expense",
    "category": "한도대출이자",
    "amount": 19957,
    "memo": "이자/수수료",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258294,
    "date": "2025-03-09",
    "type": "income",
    "category": "정아뜰리에",
    "amount": 398000,
    "memo": "정아뜰리에",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258295,
    "date": "2025-03-09",
    "type": "income",
    "category": "정아뜰리에",
    "amount": 398000,
    "memo": "정아뜰리에",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258296,
    "date": "2025-03-09",
    "type": "income",
    "category": "정아뜰리에",
    "amount": 398000,
    "memo": "정아뜰리에",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258297,
    "date": "2025-03-11",
    "type": "expense",
    "category": "지혁이영어",
    "amount": 190000,
    "memo": "학원/교재",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258298,
    "date": "2025-03-11",
    "type": "expense",
    "category": "당근-나이키운동화",
    "amount": 20000,
    "memo": "지혁가인",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258299,
    "date": "2025-03-12",
    "type": "income",
    "category": "당근-레고프렌즈",
    "amount": 24000,
    "memo": "부수입",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258300,
    "date": "2025-03-21",
    "type": "expense",
    "category": "카카오페이-다영-삼겹살",
    "amount": 30000,
    "memo": "식당/카페",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258301,
    "date": "2025-03-24",
    "type": "expense",
    "category": "카카오페이-",
    "amount": 5000,
    "memo": "-",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258302,
    "date": "2025-03-25",
    "type": "income",
    "category": "아동수당",
    "amount": 100000,
    "memo": "국가지원금",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258303,
    "date": "2025-03-25",
    "type": "income",
    "category": "급여",
    "amount": 1500000,
    "memo": "상학월급",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258304,
    "date": "2025-03-25",
    "type": "income",
    "category": "레뷰어플",
    "amount": 17641,
    "memo": "부수입",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258305,
    "date": "2025-03-25",
    "type": "income",
    "category": "카카오페이-다영-아웃백",
    "amount": 22000,
    "memo": "부수입",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258306,
    "date": "2025-03-25",
    "type": "expense",
    "category": "카카오페이-e카드교환권",
    "amount": 30000,
    "memo": "여행/문화",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258307,
    "date": "2025-03-26",
    "type": "income",
    "category": "당근-레고견인트럭",
    "amount": 70000,
    "memo": "부수입",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258308,
    "date": "2025-03-27",
    "type": "expense",
    "category": "카카오페이-다영-구디백",
    "amount": 20000,
    "memo": "사업비",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258309,
    "date": "2025-04-02",
    "type": "income",
    "category": "민들레",
    "amount": 812280,
    "memo": "다정월급/민들레,미사초,단기강의",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258310,
    "date": "2025-04-03",
    "type": "income",
    "category": "배움이,김선주,김수빈",
    "amount": 10600,
    "memo": "미술재료대리구입",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258311,
    "date": "2025-04-03",
    "type": "income",
    "category": "김제순,류나미사강변한강로 170",
    "amount": 14800,
    "memo": "미술재료대리구입",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258312,
    "date": "2025-04-03",
    "type": "income",
    "category": "이미경",
    "amount": 5800,
    "memo": "미술재료대리구입",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258313,
    "date": "2025-04-04",
    "type": "expense",
    "category": "카카오페이-다영-코스트코",
    "amount": 100000,
    "memo": "식재료",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258314,
    "date": "2025-04-04",
    "type": "expense",
    "category": "카카오페이-다영-시동배터리",
    "amount": 70000,
    "memo": "교통",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258315,
    "date": "2025-04-05",
    "type": "expense",
    "category": "카카오페이-다영-홍규지인용동",
    "amount": 30000,
    "memo": "타인에게주는 용돈/선물",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258316,
    "date": "2025-04-07",
    "type": "income",
    "category": "미분류",
    "amount": 99600,
    "memo": "정아뜰리에",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258317,
    "date": "2025-04-08",
    "type": "income",
    "category": "미분류",
    "amount": 99600,
    "memo": "정아뜰리에",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258318,
    "date": "2025-04-08",
    "type": "income",
    "category": "미분류",
    "amount": 99850,
    "memo": "정아뜰리에",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258319,
    "date": "2025-04-08",
    "type": "income",
    "category": "미분류",
    "amount": 99600,
    "memo": "정아뜰리에",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258320,
    "date": "2025-04-09",
    "type": "expense",
    "category": "용돈",
    "amount": 6000,
    "memo": "지혁가인",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258321,
    "date": "2025-04-10",
    "type": "income",
    "category": "김제순,류나미",
    "amount": 55200,
    "memo": "미술재료대리구입",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258322,
    "date": "2025-04-10",
    "type": "expense",
    "category": "테무-핀셋,택배칼,미술스펀지4,종이뜯기3,대형틴케이스",
    "amount": 18005,
    "memo": "개인쇼핑",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258323,
    "date": "2025-04-10",
    "type": "expense",
    "category": "테무-바오홍,아크릴파레트",
    "amount": 39363,
    "memo": "개인쇼핑",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258324,
    "date": "2025-04-15",
    "type": "expense",
    "category": "알리-경량3단선반",
    "amount": 0,
    "memo": "여행/문화",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258325,
    "date": "2025-04-16",
    "type": "expense",
    "category": "카카오페이-다영",
    "amount": 40000,
    "memo": "기타",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258326,
    "date": "2025-04-17",
    "type": "income",
    "category": "김제순,이미경",
    "amount": 21400,
    "memo": "미술재료대리구입",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258327,
    "date": "2025-04-17",
    "type": "income",
    "category": "이종록",
    "amount": 48600,
    "memo": "부수입",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258328,
    "date": "2025-04-17",
    "type": "income",
    "category": "김선주,배움이",
    "amount": 68700,
    "memo": "미술재료대리구입",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258329,
    "date": "2025-04-18",
    "type": "expense",
    "category": "카카오페이-다영",
    "amount": 20000,
    "memo": "기타",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258330,
    "date": "2025-04-20",
    "type": "income",
    "category": "카카오페이-다영",
    "amount": 40000,
    "memo": "부수입",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258331,
    "date": "2025-04-22",
    "type": "expense",
    "category": "알리-어린이날 장난감 등",
    "amount": 0,
    "memo": "지혁가인",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258332,
    "date": "2025-04-25",
    "type": "income",
    "category": "아동수당",
    "amount": 100000,
    "memo": "국가지원금",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258333,
    "date": "2025-04-25",
    "type": "income",
    "category": "급여",
    "amount": 1300000,
    "memo": "상학월급",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258334,
    "date": "2025-04-27",
    "type": "income",
    "category": "카카오페이-새언니-여행경비",
    "amount": 200000,
    "memo": "부수입",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258335,
    "date": "2025-04-28",
    "type": "expense",
    "category": "네이버-다정샌들",
    "amount": 58562,
    "memo": "미용비",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258336,
    "date": "2025-04-30",
    "type": "expense",
    "category": "테무-스케치북,판넬4개,니트토트백4개",
    "amount": 39196,
    "memo": "개인쇼핑",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258337,
    "date": "2025-05-01",
    "type": "expense",
    "category": "쿠팡-버너바람막이",
    "amount": 11870,
    "memo": "여행/문화",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258338,
    "date": "2025-05-02",
    "type": "income",
    "category": "국만취업지원금",
    "amount": 1000000,
    "memo": "국가지원금",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258339,
    "date": "2025-05-02",
    "type": "expense",
    "category": "애플클라우드",
    "amount": 1100,
    "memo": "통신 렌탈 구독료",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258340,
    "date": "2025-05-02",
    "type": "expense",
    "category": "테무-바오홍5,밀대",
    "amount": 100667,
    "memo": "미술재료대리구입",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258341,
    "date": "2025-05-02",
    "type": "expense",
    "category": "NICE",
    "amount": 16000,
    "memo": "-",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258342,
    "date": "2025-05-02",
    "type": "expense",
    "category": "쿠팡-양꼬치",
    "amount": 26780,
    "memo": "여행/문화",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258343,
    "date": "2025-05-02",
    "type": "expense",
    "category": "스타필드",
    "amount": 10500,
    "memo": "-",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258344,
    "date": "2025-05-02",
    "type": "expense",
    "category": "쿠팡-음료수",
    "amount": 16900,
    "memo": "식재료",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258345,
    "date": "2025-05-02",
    "type": "expense",
    "category": "쿠팡-식품",
    "amount": 29960,
    "memo": "식재료",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258347,
    "date": "2025-05-03",
    "type": "expense",
    "category": "유튜브프리미엄",
    "amount": 7200,
    "memo": "통신 렌탈 구독료",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258348,
    "date": "2025-05-03",
    "type": "expense",
    "category": "키다리식품",
    "amount": 6000,
    "memo": "식재료",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258349,
    "date": "2025-05-03",
    "type": "expense",
    "category": "쿠팡-머리끈",
    "amount": 5900,
    "memo": "생활용품",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258350,
    "date": "2025-05-03",
    "type": "expense",
    "category": "한도대출이자",
    "amount": 15765,
    "memo": "이자/수수료",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258351,
    "date": "2025-05-04",
    "type": "expense",
    "category": "캠핑동해-편의점",
    "amount": 14400,
    "memo": "여행/문화",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258352,
    "date": "2025-05-04",
    "type": "income",
    "category": "카카오페이-상학",
    "amount": 200000,
    "memo": "부수입",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258353,
    "date": "2025-05-05",
    "type": "expense",
    "category": "쿠팡-바리깡",
    "amount": 50460,
    "memo": "생활용품",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258354,
    "date": "2025-05-05",
    "type": "expense",
    "category": "휴게소",
    "amount": 11500,
    "memo": "여행/문화",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258355,
    "date": "2025-05-06",
    "type": "expense",
    "category": "이케아",
    "amount": 7900,
    "memo": "식재료",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258356,
    "date": "2025-05-07",
    "type": "expense",
    "category": "삼성생명보험",
    "amount": 54797,
    "memo": "보험",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258357,
    "date": "2025-05-07",
    "type": "expense",
    "category": "영경쭌모임",
    "amount": 20000,
    "memo": "모임회비",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258358,
    "date": "2025-05-07",
    "type": "expense",
    "category": "쿠팡-식품",
    "amount": 36750,
    "memo": "식재료",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258359,
    "date": "2025-05-07",
    "type": "expense",
    "category": "용돈",
    "amount": 6000,
    "memo": "지혁가인",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258360,
    "date": "2025-05-08",
    "type": "income",
    "category": "김마리아,이미경",
    "amount": 41000,
    "memo": "미술재료대리구입",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258361,
    "date": "2025-05-08",
    "type": "expense",
    "category": "쿠팡-돌돌이리필",
    "amount": 10510,
    "memo": "생활용품",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258362,
    "date": "2025-05-08",
    "type": "expense",
    "category": "쿠팡-후라이팬",
    "amount": 9700,
    "memo": "생활용품",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258363,
    "date": "2025-05-08",
    "type": "expense",
    "category": "쿠팡-샴푸",
    "amount": 20070,
    "memo": "생활용품",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258364,
    "date": "2025-05-09",
    "type": "income",
    "category": "미분류",
    "amount": 99600,
    "memo": "정아뜰리에",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258365,
    "date": "2025-05-09",
    "type": "income",
    "category": "미분류",
    "amount": 99600,
    "memo": "정아뜰리에",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258366,
    "date": "2025-05-09",
    "type": "income",
    "category": "미분류",
    "amount": 99850,
    "memo": "정아뜰리에",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258367,
    "date": "2025-05-09",
    "type": "expense",
    "category": "LGU+ 인터넷티비",
    "amount": 34100,
    "memo": "통신 렌탈 구독료",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258368,
    "date": "2025-05-09",
    "type": "expense",
    "category": "알리",
    "amount": 29914,
    "memo": "생활용품",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258369,
    "date": "2025-05-09",
    "type": "expense",
    "category": "알리",
    "amount": 34640,
    "memo": "생활용품",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258370,
    "date": "2025-05-09",
    "type": "expense",
    "category": "다이소",
    "amount": 16000,
    "memo": "생활용품",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258371,
    "date": "2025-05-09",
    "type": "expense",
    "category": "알리앙스-귀걸이",
    "amount": 27000,
    "memo": "개인쇼핑",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258372,
    "date": "2025-05-09",
    "type": "expense",
    "category": "그린플레이트",
    "amount": 79600,
    "memo": "식당/카페",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258373,
    "date": "2025-05-10",
    "type": "expense",
    "category": "쿠팡-폰거치대",
    "amount": 9820,
    "memo": "개인쇼핑",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258374,
    "date": "2025-05-10",
    "type": "expense",
    "category": "쿠팡-폰케이스",
    "amount": 11390,
    "memo": "개인쇼핑",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258375,
    "date": "2025-05-10",
    "type": "expense",
    "category": "이케아",
    "amount": 28100,
    "memo": "생활용품",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258376,
    "date": "2025-05-10",
    "type": "expense",
    "category": "당근-난방텐트",
    "amount": 15000,
    "memo": "생활용품",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258377,
    "date": "2025-05-11",
    "type": "expense",
    "category": "쿠팡-립틴트",
    "amount": 6060,
    "memo": "개인쇼핑",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258378,
    "date": "2025-05-12",
    "type": "income",
    "category": "미분류",
    "amount": 99600,
    "memo": "정아뜰리에",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258379,
    "date": "2025-05-12",
    "type": "income",
    "category": "김선주",
    "amount": 20000,
    "memo": "미술재료대리구입",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258380,
    "date": "2025-05-12",
    "type": "expense",
    "category": "지혁이영어",
    "amount": 190000,
    "memo": "학원/교재",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258381,
    "date": "2025-05-12",
    "type": "expense",
    "category": "지혁폰요금",
    "amount": 4990,
    "memo": "통신 렌탈 구독료",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258382,
    "date": "2025-05-12",
    "type": "expense",
    "category": "가인폰요금",
    "amount": 5500,
    "memo": "통신 렌탈 구독료",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258383,
    "date": "2025-05-12",
    "type": "expense",
    "category": "알리-캠핑의자,경량테이블,미니파레트",
    "amount": 33986,
    "memo": "생활용품",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258384,
    "date": "2025-05-12",
    "type": "expense",
    "category": "당근-지혁이전자사전",
    "amount": 100000,
    "memo": "학원/교재",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258385,
    "date": "2025-05-12",
    "type": "expense",
    "category": "코원에너지",
    "amount": 8640,
    "memo": "관리비",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258386,
    "date": "2025-05-12",
    "type": "expense",
    "category": "베이커리",
    "amount": 15500,
    "memo": "식당/카페",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258387,
    "date": "2025-05-12",
    "type": "expense",
    "category": "다정폰요금 KT",
    "amount": 52230,
    "memo": "통신 렌탈 구독료",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258388,
    "date": "2025-05-13",
    "type": "expense",
    "category": "크레타클래스",
    "amount": 43000,
    "memo": "학원/교재",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258389,
    "date": "2025-05-13",
    "type": "expense",
    "category": "자동차보험",
    "amount": 118900,
    "memo": "교통",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258390,
    "date": "2025-05-13",
    "type": "expense",
    "category": "트레이더스",
    "amount": 9980,
    "memo": "식당/카페",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258391,
    "date": "2025-05-13",
    "type": "expense",
    "category": "트레이더스",
    "amount": 38920,
    "memo": "식재료",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258392,
    "date": "2025-05-13",
    "type": "expense",
    "category": "배달",
    "amount": 26700,
    "memo": "배달",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258393,
    "date": "2025-05-14",
    "type": "income",
    "category": "자혁보험보상금-무릎",
    "amount": 240000,
    "memo": "부수입",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258394,
    "date": "2025-05-14",
    "type": "expense",
    "category": "한마음문구",
    "amount": 9400,
    "memo": "사업비",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258395,
    "date": "2025-05-15",
    "type": "expense",
    "category": "미래애샛실비보험",
    "amount": 61510,
    "memo": "보험",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258396,
    "date": "2025-05-15",
    "type": "expense",
    "category": "지혁실비보험",
    "amount": 35130,
    "memo": "보험",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258397,
    "date": "2025-05-15",
    "type": "expense",
    "category": "미래에셋생명보험",
    "amount": 28434,
    "memo": "보험",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258398,
    "date": "2025-05-16",
    "type": "expense",
    "category": "쿠팡-립틴트",
    "amount": 8710,
    "memo": "개인쇼핑",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258399,
    "date": "2025-05-16",
    "type": "expense",
    "category": "지혁수영",
    "amount": 23100,
    "memo": "학원/교재",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258400,
    "date": "2025-05-16",
    "type": "expense",
    "category": "쿠팡-식품",
    "amount": 35520,
    "memo": "식재료",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258401,
    "date": "2025-05-16",
    "type": "expense",
    "category": "쿠팡-장화",
    "amount": 10840,
    "memo": "생활용품",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258402,
    "date": "2025-05-16",
    "type": "expense",
    "category": "테무-가방걸이",
    "amount": 3095,
    "memo": "생활용품",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258403,
    "date": "2025-05-16",
    "type": "expense",
    "category": "테무-바오홍",
    "amount": 16483,
    "memo": "미술재료대리구입",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258404,
    "date": "2025-05-16",
    "type": "expense",
    "category": "알리-미니파래트,얼음통,ㅅ실리콘반찬통",
    "amount": 41098,
    "memo": "생활용품",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258405,
    "date": "2025-05-16",
    "type": "expense",
    "category": "알리-김치자르미,차량용선풍기,탭거치대",
    "amount": 38674,
    "memo": "생활용품",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258406,
    "date": "2025-05-17",
    "type": "income",
    "category": "세금환급",
    "amount": 1000000,
    "memo": "부수입",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258407,
    "date": "2025-05-17",
    "type": "expense",
    "category": "테무-바오홍1, 수채화책2권",
    "amount": 41739,
    "memo": "사업비",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258408,
    "date": "2025-05-17",
    "type": "expense",
    "category": "편의점",
    "amount": 3400,
    "memo": "기타",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258409,
    "date": "2025-05-17",
    "type": "expense",
    "category": "카카오페이-다영-찜질방",
    "amount": 30000,
    "memo": "생활용품",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258410,
    "date": "2025-05-18",
    "type": "expense",
    "category": "쿠팡-시리얼",
    "amount": 11250,
    "memo": "식재료",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258411,
    "date": "2025-05-18",
    "type": "expense",
    "category": "쿠팡-식품",
    "amount": 55550,
    "memo": "식재료",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258412,
    "date": "2025-05-18",
    "type": "expense",
    "category": "카카오페이-준희생일",
    "amount": 100000,
    "memo": "타인에게주는 용돈/선물",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258413,
    "date": "2025-05-19",
    "type": "expense",
    "category": "쿠팡-콘드로이친",
    "amount": 19900,
    "memo": "병원/약",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258414,
    "date": "2025-05-19",
    "type": "expense",
    "category": "쿠팡-츄리닝바지",
    "amount": 16490,
    "memo": "개인쇼핑",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258415,
    "date": "2025-05-19",
    "type": "expense",
    "category": "쿠팡-블루베리-시엄니",
    "amount": 20950,
    "memo": "타인에게주는 용돈/선물",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258416,
    "date": "2025-05-19",
    "type": "expense",
    "category": "배달",
    "amount": 17582,
    "memo": "배달",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258418,
    "date": "2025-05-19",
    "type": "expense",
    "category": "하나로마트",
    "amount": 16990,
    "memo": "식재료",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258419,
    "date": "2025-05-19",
    "type": "expense",
    "category": "쿠팡-사춘기사전-지혁이",
    "amount": 10800,
    "memo": "지혁가인",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258420,
    "date": "2025-05-19",
    "type": "expense",
    "category": "쿠팡-아빠폰케이스",
    "amount": 13720,
    "memo": "타인에게주는 용돈/선물",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258421,
    "date": "2025-05-20",
    "type": "expense",
    "category": "코웨이침대2개",
    "amount": 46100,
    "memo": "통신 렌탈 구독료",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258422,
    "date": "2025-05-20",
    "type": "expense",
    "category": "코웨이정수기",
    "amount": 27360,
    "memo": "통신 렌탈 구독료",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258423,
    "date": "2025-05-20",
    "type": "expense",
    "category": "LG식세기",
    "amount": 30900,
    "memo": "통신 렌탈 구독료",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258424,
    "date": "2025-05-20",
    "type": "expense",
    "category": "쿠팡-요미사료",
    "amount": 15690,
    "memo": "반려동물",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258425,
    "date": "2025-05-21",
    "type": "expense",
    "category": "쿠팡멤버십",
    "amount": 7890,
    "memo": "통신 렌탈 구독료",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258426,
    "date": "2025-05-21",
    "type": "expense",
    "category": "테무-바오홍",
    "amount": 19491,
    "memo": "미술재료대리구입",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258427,
    "date": "2025-05-22",
    "type": "income",
    "category": "김마리아",
    "amount": 1000,
    "memo": "미술재료대리구입",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258428,
    "date": "2025-05-22",
    "type": "income",
    "category": "김마리아,권미란",
    "amount": 46600,
    "memo": "미술재료대리구입",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258429,
    "date": "2025-05-22",
    "type": "expense",
    "category": "쿠팡-모기채",
    "amount": 12410,
    "memo": "생활용품",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258430,
    "date": "2025-05-22",
    "type": "expense",
    "category": "배달",
    "amount": 20500,
    "memo": "배달",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258431,
    "date": "2025-05-22",
    "type": "expense",
    "category": "테무-스케치북2개",
    "amount": 36728,
    "memo": "미술재료대리구입",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258432,
    "date": "2025-05-22",
    "type": "expense",
    "category": "인터넷-이레화방",
    "amount": 70610,
    "memo": "사업비",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258433,
    "date": "2025-05-22",
    "type": "expense",
    "category": "카카오페이-다영-트레이더스",
    "amount": 115000,
    "memo": "식재료",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258434,
    "date": "2025-05-23",
    "type": "income",
    "category": "아동수당",
    "amount": 100000,
    "memo": "국가지원금",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258435,
    "date": "2025-05-23",
    "type": "income",
    "category": "급여",
    "amount": 1200000,
    "memo": "상학월급",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258436,
    "date": "2025-05-23",
    "type": "expense",
    "category": "알리-미술미니이젤",
    "amount": 75114,
    "memo": "개인쇼핑",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258437,
    "date": "2025-05-23",
    "type": "expense",
    "category": "에버랜드",
    "amount": 43000,
    "memo": "여행/문화",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258438,
    "date": "2025-05-23",
    "type": "expense",
    "category": "에버랜드",
    "amount": 4800,
    "memo": "여행/문화",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258439,
    "date": "2025-05-23",
    "type": "expense",
    "category": "에버랜드",
    "amount": 50200,
    "memo": "여행/문화",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258440,
    "date": "2025-05-23",
    "type": "expense",
    "category": "에버랜드",
    "amount": 18000,
    "memo": "여행/문화",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258441,
    "date": "2025-05-23",
    "type": "expense",
    "category": "에버랜드",
    "amount": 5400,
    "memo": "여행/문화",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258442,
    "date": "2025-05-23",
    "type": "expense",
    "category": "알리-엄마집선반장",
    "amount": 23426,
    "memo": "타인에게주는 용돈/선물",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258443,
    "date": "2025-05-23",
    "type": "expense",
    "category": "아이디어스-속옷",
    "amount": 24000,
    "memo": "생활용품",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258444,
    "date": "2025-05-23",
    "type": "expense",
    "category": "알리-미니파레트,미니스케치북,기타",
    "amount": 32366,
    "memo": "개인쇼핑",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258445,
    "date": "2025-05-24",
    "type": "expense",
    "category": "한마음문구",
    "amount": 6200,
    "memo": "사업비",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258446,
    "date": "2025-05-24",
    "type": "expense",
    "category": "룸페커",
    "amount": 68040,
    "memo": "개인쇼핑",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258447,
    "date": "2025-05-24",
    "type": "expense",
    "category": "룸페커",
    "amount": 70740,
    "memo": "개인쇼핑",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258448,
    "date": "2025-05-24",
    "type": "expense",
    "category": "배달",
    "amount": 15500,
    "memo": "배달",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258449,
    "date": "2025-05-24",
    "type": "expense",
    "category": "카카오페이-당근",
    "amount": 70000,
    "memo": "-",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258450,
    "date": "2025-05-24",
    "type": "expense",
    "category": "인터넷",
    "amount": 41250,
    "memo": "-",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258451,
    "date": "2025-05-25",
    "type": "expense",
    "category": "하나로마트",
    "amount": 6000,
    "memo": "식재료",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258452,
    "date": "2025-05-25",
    "type": "expense",
    "category": "테무-스케치북,슬리퍼,안경끈,양먄테이프",
    "amount": 32486,
    "memo": "생활용품",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258453,
    "date": "2025-05-27",
    "type": "expense",
    "category": "배달",
    "amount": 20576,
    "memo": "배달",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258454,
    "date": "2025-05-27",
    "type": "expense",
    "category": "스타필드",
    "amount": 14800,
    "memo": "-",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258455,
    "date": "2025-05-27",
    "type": "expense",
    "category": "스타필드",
    "amount": 35900,
    "memo": "-",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258456,
    "date": "2025-05-28",
    "type": "expense",
    "category": "쿠팡-가인실내화",
    "amount": 5560,
    "memo": "지혁가인",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258457,
    "date": "2025-05-28",
    "type": "expense",
    "category": "쿠팡-식품",
    "amount": 33520,
    "memo": "식재료",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258458,
    "date": "2025-05-28",
    "type": "expense",
    "category": "쿠팡-알파 시디",
    "amount": 12950,
    "memo": "병원/약",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258459,
    "date": "2025-05-28",
    "type": "expense",
    "category": "배달",
    "amount": 26000,
    "memo": "배달",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258460,
    "date": "2025-05-28",
    "type": "expense",
    "category": "쿠팡-지혁단소",
    "amount": 11500,
    "memo": "학원/교재",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258461,
    "date": "2025-05-29",
    "type": "income",
    "category": "정자경,류나미",
    "amount": 33000,
    "memo": "미술재료대리구입",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258462,
    "date": "2025-05-29",
    "type": "expense",
    "category": "네이버-알파시디",
    "amount": 39100,
    "memo": "병원/약",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258463,
    "date": "2025-05-30",
    "type": "expense",
    "category": "쿠팡-썬크림",
    "amount": 28880,
    "memo": "생활용품",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258464,
    "date": "2025-05-31",
    "type": "expense",
    "category": "배달",
    "amount": 21900,
    "memo": "배달",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258465,
    "date": "2025-05-31",
    "type": "expense",
    "category": "테무-종이뜯기4개,가디건,팔토시,꽃프레스",
    "amount": 40703,
    "memo": "생활용품",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258466,
    "date": "2025-05-31",
    "type": "expense",
    "category": "배달",
    "amount": 15000,
    "memo": "배달",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258467,
    "date": "2025-05-31",
    "type": "expense",
    "category": "올리브영",
    "amount": 2300,
    "memo": "생활용품",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258468,
    "date": "2025-05-31",
    "type": "expense",
    "category": "버스",
    "amount": 2910,
    "memo": "교통",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258469,
    "date": "2025-06-01",
    "type": "expense",
    "category": "쿠팡-지혁영어교재",
    "amount": 9450,
    "memo": "학원/교재",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258470,
    "date": "2025-06-03",
    "type": "expense",
    "category": "유튜브프리미엄",
    "amount": 10600,
    "memo": "통신 렌탈 구독료",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258471,
    "date": "2025-06-03",
    "type": "expense",
    "category": "쿠팡-올리브오일",
    "amount": 17310,
    "memo": "식재료",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258472,
    "date": "2025-06-03",
    "type": "expense",
    "category": "쿠팡-어머니라디오",
    "amount": 29800,
    "memo": "타인에게주는 용돈/선물",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258473,
    "date": "2025-06-05",
    "type": "income",
    "category": "베움이",
    "amount": 20000,
    "memo": "미술재료대리구입",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258474,
    "date": "2025-06-05",
    "type": "expense",
    "category": "삼성생명보험",
    "amount": 54797,
    "memo": "보험",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258475,
    "date": "2025-06-05",
    "type": "expense",
    "category": "영경쭌모임",
    "amount": 20000,
    "memo": "모임회비",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258476,
    "date": "2025-06-05",
    "type": "expense",
    "category": "쿠팡-애들양말",
    "amount": 9900,
    "memo": "지혁가인",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258477,
    "date": "2025-06-05",
    "type": "expense",
    "category": "쿠팡-가인무릅양말",
    "amount": 9900,
    "memo": "지혁가인",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258478,
    "date": "2025-06-06",
    "type": "expense",
    "category": "쿠팡-설라음식",
    "amount": 62300,
    "memo": "타인에게주는 용돈/선물",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258479,
    "date": "2025-06-06",
    "type": "expense",
    "category": "이케아",
    "amount": 11800,
    "memo": "생활용품",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258480,
    "date": "2025-06-06",
    "type": "expense",
    "category": "한도대출이자",
    "amount": 14023,
    "memo": "이자/수수료",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258481,
    "date": "2025-06-07",
    "type": "expense",
    "category": "이케아",
    "amount": 10000,
    "memo": "생활용품",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258482,
    "date": "2025-06-08",
    "type": "expense",
    "category": "복호두",
    "amount": 8000,
    "memo": "지혁가인",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258483,
    "date": "2025-06-08",
    "type": "expense",
    "category": "건대-치킨",
    "amount": 28900,
    "memo": "여행/문화",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258484,
    "date": "2025-06-08",
    "type": "expense",
    "category": "어린이대공원-카페",
    "amount": 4000,
    "memo": "여행/문화",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258485,
    "date": "2025-06-08",
    "type": "expense",
    "category": "편의점",
    "amount": 4600,
    "memo": "여행/문화",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258486,
    "date": "2025-06-09",
    "type": "income",
    "category": "미분류",
    "amount": 99600,
    "memo": "정아뜰리에",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258487,
    "date": "2025-06-09",
    "type": "income",
    "category": "미분류",
    "amount": 99600,
    "memo": "정아뜰리에",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258488,
    "date": "2025-06-09",
    "type": "income",
    "category": "미분류",
    "amount": 99850,
    "memo": "정아뜰리에",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258489,
    "date": "2025-06-09",
    "type": "expense",
    "category": "LGU+ 인터넷티비",
    "amount": 34100,
    "memo": "통신 렌탈 구독료",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258490,
    "date": "2025-06-09",
    "type": "expense",
    "category": "한마음문구",
    "amount": 19400,
    "memo": "사업비",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258491,
    "date": "2025-06-10",
    "type": "income",
    "category": "미분류",
    "amount": 99600,
    "memo": "정아뜰리에",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258492,
    "date": "2025-06-10",
    "type": "expense",
    "category": "스타필드",
    "amount": 12900,
    "memo": "-",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258493,
    "date": "2025-06-10",
    "type": "expense",
    "category": "스타필드",
    "amount": 14300,
    "memo": "-",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258494,
    "date": "2025-06-10",
    "type": "expense",
    "category": "스타필드",
    "amount": 45200,
    "memo": "-",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258495,
    "date": "2025-06-10",
    "type": "expense",
    "category": "테무-붓,휴대용선풍기,미니파레트,머리띠 등",
    "amount": 56470,
    "memo": "생활용품",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258496,
    "date": "2025-06-11",
    "type": "expense",
    "category": "지혁폰요금",
    "amount": 4990,
    "memo": "통신 렌탈 구독료",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258497,
    "date": "2025-06-11",
    "type": "expense",
    "category": "가인폰요금",
    "amount": 5500,
    "memo": "통신 렌탈 구독료",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258498,
    "date": "2025-06-11",
    "type": "expense",
    "category": "다정폰요금 KT",
    "amount": 55330,
    "memo": "통신 렌탈 구독료",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258499,
    "date": "2025-06-11",
    "type": "expense",
    "category": "순대고집",
    "amount": 22000,
    "memo": "식당/카페",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258500,
    "date": "2025-06-11",
    "type": "expense",
    "category": "용돈",
    "amount": 6000,
    "memo": "지혁가인",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258501,
    "date": "2025-06-12",
    "type": "income",
    "category": "김마리아,김선주",
    "amount": 9950,
    "memo": "미술재료대리구입",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258502,
    "date": "2025-06-12",
    "type": "income",
    "category": "류나미사강변한강로 170",
    "amount": 9950,
    "memo": "미술재료대리구입",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258503,
    "date": "2025-06-12",
    "type": "income",
    "category": "배움이",
    "amount": 1750,
    "memo": "미술재료대리구입",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258504,
    "date": "2025-06-12",
    "type": "expense",
    "category": "쿠팡-가인기탄수학",
    "amount": 37800,
    "memo": "학원/교재",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258505,
    "date": "2025-06-13",
    "type": "expense",
    "category": "크레타클래스",
    "amount": 43000,
    "memo": "학원/교재",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258506,
    "date": "2025-06-13",
    "type": "expense",
    "category": "자동차보험",
    "amount": 118900,
    "memo": "교통",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258507,
    "date": "2025-06-13",
    "type": "expense",
    "category": "인터넷-이레화방",
    "amount": 47560,
    "memo": "미술재료대리구입",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258508,
    "date": "2025-06-13",
    "type": "expense",
    "category": "쿠팡-요미사료",
    "amount": 13990,
    "memo": "반려동물",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258509,
    "date": "2025-06-13",
    "type": "expense",
    "category": "쿠팡-식품",
    "amount": 30360,
    "memo": "식재료",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258510,
    "date": "2025-06-13",
    "type": "expense",
    "category": "김신와규-소고기장조림",
    "amount": 45200,
    "memo": "식재료",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258511,
    "date": "2025-06-13",
    "type": "expense",
    "category": "kcp결제",
    "amount": 88755,
    "memo": "-",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258512,
    "date": "2025-06-13",
    "type": "expense",
    "category": "쿠팡-식품",
    "amount": 19970,
    "memo": "식재료",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258513,
    "date": "2025-06-14",
    "type": "expense",
    "category": "스타필드",
    "amount": 98000,
    "memo": "-",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258514,
    "date": "2025-06-14",
    "type": "expense",
    "category": "스타필드",
    "amount": 30000,
    "memo": "-",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258515,
    "date": "2025-06-14",
    "type": "expense",
    "category": "스타필드",
    "amount": 5000,
    "memo": "-",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258516,
    "date": "2025-06-15",
    "type": "expense",
    "category": "쿠팡-수분크림",
    "amount": 25210,
    "memo": "생활용품",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258517,
    "date": "2025-06-15",
    "type": "expense",
    "category": "트레이더스",
    "amount": 11700,
    "memo": "식재료",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258518,
    "date": "2025-06-15",
    "type": "expense",
    "category": "트레이더스",
    "amount": 141000,
    "memo": "식재료",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258519,
    "date": "2025-06-15",
    "type": "expense",
    "category": "스타필드",
    "amount": 27000,
    "memo": "-",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258520,
    "date": "2025-06-16",
    "type": "expense",
    "category": "애플클라우드",
    "amount": 1100,
    "memo": "통신 렌탈 구독료",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258521,
    "date": "2025-06-16",
    "type": "expense",
    "category": "미래애샛실비보험",
    "amount": 66550,
    "memo": "보험",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258522,
    "date": "2025-06-16",
    "type": "expense",
    "category": "지혁실비보험",
    "amount": 36990,
    "memo": "보험",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258523,
    "date": "2025-06-16",
    "type": "expense",
    "category": "미래에셋생명보험",
    "amount": 28434,
    "memo": "보험",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258524,
    "date": "2025-06-16",
    "type": "expense",
    "category": "쿠팡-냉감패드",
    "amount": 46900,
    "memo": "생활용품",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258525,
    "date": "2025-06-16",
    "type": "expense",
    "category": "카카오페이-신세계상품권",
    "amount": 50000,
    "memo": "타인에게주는 용돈/선물",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258526,
    "date": "2025-06-17",
    "type": "expense",
    "category": "쿠팡-다정반팔",
    "amount": 7900,
    "memo": "개인쇼핑",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258527,
    "date": "2025-06-17",
    "type": "expense",
    "category": "배달",
    "amount": 1566,
    "memo": "배달",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258528,
    "date": "2025-06-18",
    "type": "income",
    "category": "김수빈",
    "amount": 40000,
    "memo": "미술재료대리구입",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258529,
    "date": "2025-06-18",
    "type": "expense",
    "category": "알리-미니파레트",
    "amount": 11721,
    "memo": "개인쇼핑",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258530,
    "date": "2025-06-18",
    "type": "expense",
    "category": "쿠팡-음료수",
    "amount": 13900,
    "memo": "식재료",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258531,
    "date": "2025-06-19",
    "type": "income",
    "category": "배움이",
    "amount": 3300,
    "memo": "미술재료대리구입",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258532,
    "date": "2025-06-19",
    "type": "income",
    "category": "권미란,염찬미",
    "amount": 22000,
    "memo": "미술재료대리구입",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258533,
    "date": "2025-06-19",
    "type": "expense",
    "category": "쿠팡-세제",
    "amount": 8960,
    "memo": "생활용품",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258534,
    "date": "2025-06-20",
    "type": "expense",
    "category": "코웨이침대2개",
    "amount": 46100,
    "memo": "통신 렌탈 구독료",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258535,
    "date": "2025-06-20",
    "type": "expense",
    "category": "코웨이정수기",
    "amount": 27360,
    "memo": "통신 렌탈 구독료",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258536,
    "date": "2025-06-20",
    "type": "expense",
    "category": "LG식세기",
    "amount": 30900,
    "memo": "통신 렌탈 구독료",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258537,
    "date": "2025-06-20",
    "type": "expense",
    "category": "쿠팡-과자",
    "amount": 10000,
    "memo": "식재료",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258538,
    "date": "2025-06-20",
    "type": "expense",
    "category": "테무-반바지,머리띠,파레트",
    "amount": 25000,
    "memo": "생활용품",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258539,
    "date": "2025-06-21",
    "type": "expense",
    "category": "쿠팡멤버십",
    "amount": 7890,
    "memo": "통신 렌탈 구독료",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258540,
    "date": "2025-06-21",
    "type": "expense",
    "category": "테무-아크릴박스,캔버스패드,가인소녀책,반팔티,문양도안책,스케치북",
    "amount": 43000,
    "memo": "생활용품",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258541,
    "date": "2025-06-21",
    "type": "expense",
    "category": "카카오페이-",
    "amount": 113000,
    "memo": "-",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258542,
    "date": "2025-06-22",
    "type": "expense",
    "category": "상품권",
    "amount": 28950,
    "memo": "타인에게주는 용돈/선물",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258543,
    "date": "2025-06-22",
    "type": "expense",
    "category": "아이스크림",
    "amount": 7800,
    "memo": "지혁가인",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258544,
    "date": "2025-06-22",
    "type": "expense",
    "category": "스타필드",
    "amount": 79800,
    "memo": "타인에게주는 용돈/선물",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258545,
    "date": "2025-06-22",
    "type": "expense",
    "category": "스타필드",
    "amount": 79000,
    "memo": "타인에게주는 용돈/선물",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258546,
    "date": "2025-06-23",
    "type": "expense",
    "category": "지혁이영어",
    "amount": 190000,
    "memo": "학원/교재",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258547,
    "date": "2025-06-23",
    "type": "expense",
    "category": "경주-숙소-에어앤비",
    "amount": 276115,
    "memo": "여행/문화",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258548,
    "date": "2025-06-23",
    "type": "expense",
    "category": "쿠팡-지혁영어교재",
    "amount": 19800,
    "memo": "학원/교재",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258549,
    "date": "2025-06-23",
    "type": "expense",
    "category": "쿠팡-식품",
    "amount": 22910,
    "memo": "식재료",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258550,
    "date": "2025-06-23",
    "type": "expense",
    "category": "카카오페이-보라",
    "amount": 20000,
    "memo": "식당/카페",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258551,
    "date": "2025-06-23",
    "type": "expense",
    "category": "카카오페이-",
    "amount": 140000,
    "memo": "-",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258552,
    "date": "2025-06-24",
    "type": "expense",
    "category": "밀크티탭",
    "amount": 84000,
    "memo": "학원/교재",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258553,
    "date": "2025-06-24",
    "type": "expense",
    "category": "배달",
    "amount": 13588,
    "memo": "배달",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258554,
    "date": "2025-06-24",
    "type": "expense",
    "category": "다이소",
    "amount": 20000,
    "memo": "생활용품",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258555,
    "date": "2025-06-24",
    "type": "expense",
    "category": "스타필드",
    "amount": 85650,
    "memo": "타인에게주는 용돈/선물",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258557,
    "date": "2025-06-25",
    "type": "income",
    "category": "아동수당",
    "amount": 100000,
    "memo": "국가지원금",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258558,
    "date": "2025-06-25",
    "type": "income",
    "category": "급여",
    "amount": 1000000,
    "memo": "상학월급",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258559,
    "date": "2025-06-25",
    "type": "expense",
    "category": "쿠팡-",
    "amount": 20800,
    "memo": "-",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258560,
    "date": "2025-06-25",
    "type": "income",
    "category": "카카오페이-다영",
    "amount": 10000,
    "memo": "부수입",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258561,
    "date": "2025-06-26",
    "type": "expense",
    "category": "쿠팡-어머니반찬",
    "amount": 40620,
    "memo": "타인에게주는 용돈/선물",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258562,
    "date": "2025-06-26",
    "type": "expense",
    "category": "쿠팡-클렌징오일",
    "amount": 18170,
    "memo": "생활용품",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258563,
    "date": "2025-06-26",
    "type": "expense",
    "category": "스타필드",
    "amount": 20000,
    "memo": "-",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258564,
    "date": "2025-06-27",
    "type": "expense",
    "category": "스타필드",
    "amount": 22350,
    "memo": "-",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258565,
    "date": "2025-06-27",
    "type": "expense",
    "category": "스타필드",
    "amount": 19900,
    "memo": "-",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258566,
    "date": "2025-06-27",
    "type": "expense",
    "category": "스타필드",
    "amount": 216200,
    "memo": "-",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258567,
    "date": "2025-06-27",
    "type": "expense",
    "category": "쿠팡-가인스도쿠책",
    "amount": 6930,
    "memo": "지혁가인",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258568,
    "date": "2025-06-28",
    "type": "expense",
    "category": "쿠팡-삼겹살구이팬",
    "amount": 68900,
    "memo": "생활용품",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258569,
    "date": "2025-06-28",
    "type": "expense",
    "category": "쿠팡-지혁수학연산",
    "amount": 30600,
    "memo": "학원/교재",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258570,
    "date": "2025-06-29",
    "type": "expense",
    "category": "쿠팡-아크릴투명뱍스",
    "amount": 22990,
    "memo": "생활용품",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258571,
    "date": "2025-06-29",
    "type": "expense",
    "category": "경주숙소-여기어때",
    "amount": 254600,
    "memo": "여행/문화",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258572,
    "date": "2025-06-30",
    "type": "expense",
    "category": "지하철",
    "amount": 11700,
    "memo": "교통",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258573,
    "date": "2025-07-01",
    "type": "expense",
    "category": "쿠팡-과자",
    "amount": 12270,
    "memo": "식재료",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258574,
    "date": "2025-07-01",
    "type": "expense",
    "category": "쿠팡-만년필",
    "amount": 23080,
    "memo": "미술재료대리구입",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258575,
    "date": "2025-07-01",
    "type": "expense",
    "category": "쿠팡-매직랩",
    "amount": 10450,
    "memo": "생활용품",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258576,
    "date": "2025-07-01",
    "type": "expense",
    "category": "인터넷-이레화방",
    "amount": 41660,
    "memo": "미술재료대리구입",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258577,
    "date": "2025-07-02",
    "type": "expense",
    "category": "애플클라우드",
    "amount": 1100,
    "memo": "통신 렌탈 구독료",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258578,
    "date": "2025-07-02",
    "type": "expense",
    "category": "배달",
    "amount": 19900,
    "memo": "배달",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258579,
    "date": "2025-07-02",
    "type": "expense",
    "category": "쿠팡-",
    "amount": 32850,
    "memo": "-",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258580,
    "date": "2025-07-02",
    "type": "expense",
    "category": "스타필드",
    "amount": 14900,
    "memo": "-",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258581,
    "date": "2025-07-02",
    "type": "expense",
    "category": "용돈",
    "amount": 24000,
    "memo": "지혁가인",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258582,
    "date": "2025-07-03",
    "type": "income",
    "category": "민들레",
    "amount": 1365000,
    "memo": "다정월급/민들레,미사초,단기강의",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258583,
    "date": "2025-07-03",
    "type": "income",
    "category": "미사초등학교",
    "amount": 1247430,
    "memo": "다정월급/민들레,미사초,단기강의",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258584,
    "date": "2025-07-03",
    "type": "expense",
    "category": "유튜브프리미엄",
    "amount": 10600,
    "memo": "통신 렌탈 구독료",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258585,
    "date": "2025-07-03",
    "type": "expense",
    "category": "독도쭈꾸미",
    "amount": 81500,
    "memo": "식당/카페",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258586,
    "date": "2025-07-03",
    "type": "expense",
    "category": "카카오페이-다영-코스트코",
    "amount": 69300,
    "memo": "식재료",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258587,
    "date": "2025-07-04",
    "type": "income",
    "category": "미분류",
    "amount": 174300,
    "memo": "정아뜰리에",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258588,
    "date": "2025-07-04",
    "type": "income",
    "category": "미분류",
    "amount": 99850,
    "memo": "정아뜰리에",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258589,
    "date": "2025-07-04",
    "type": "expense",
    "category": "쿠팡-식품",
    "amount": 46900,
    "memo": "식재료",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258590,
    "date": "2025-07-05",
    "type": "expense",
    "category": "쿠팡-지퍼백",
    "amount": 6590,
    "memo": "생활용품",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258591,
    "date": "2025-07-05",
    "type": "expense",
    "category": "롯데마트",
    "amount": 10800,
    "memo": "지혁가인",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258592,
    "date": "2025-07-05",
    "type": "expense",
    "category": "쿠팡-세계지도",
    "amount": 19790,
    "memo": "지혁가인",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258593,
    "date": "2025-07-05",
    "type": "expense",
    "category": "편의점",
    "amount": 2500,
    "memo": "식당/카페",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258594,
    "date": "2025-07-05",
    "type": "expense",
    "category": "롯데",
    "amount": 10000,
    "memo": "식당/카페",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258595,
    "date": "2025-07-05",
    "type": "expense",
    "category": "한도대출이자",
    "amount": 16104,
    "memo": "이자/수수료",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258596,
    "date": "2025-07-06",
    "type": "expense",
    "category": "그린플레이트",
    "amount": 150300,
    "memo": "식당/카페",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258597,
    "date": "2025-07-06",
    "type": "expense",
    "category": "샤넬-엄마",
    "amount": 177000,
    "memo": "타인에게주는 용돈/선물",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258598,
    "date": "2025-07-06",
    "type": "expense",
    "category": "배달",
    "amount": 20553,
    "memo": "배달",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258599,
    "date": "2025-07-06",
    "type": "income",
    "category": "카카오페이-유성",
    "amount": 100000,
    "memo": "부수입",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258600,
    "date": "2025-07-07",
    "type": "income",
    "category": "미분류",
    "amount": 99600,
    "memo": "정아뜰리에",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258601,
    "date": "2025-07-07",
    "type": "income",
    "category": "미분류",
    "amount": 99600,
    "memo": "정아뜰리에",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258602,
    "date": "2025-07-07",
    "type": "income",
    "category": "미분류",
    "amount": 99600,
    "memo": "정아뜰리에",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258603,
    "date": "2025-07-07",
    "type": "expense",
    "category": "삼성생명보험",
    "amount": 54797,
    "memo": "보험",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258604,
    "date": "2025-07-07",
    "type": "expense",
    "category": "영경쭌모임",
    "amount": 20000,
    "memo": "모임회비",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258605,
    "date": "2025-07-07",
    "type": "expense",
    "category": "하머니-마담파이",
    "amount": 6860,
    "memo": "식당/카페",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258606,
    "date": "2025-07-08",
    "type": "expense",
    "category": "신세계",
    "amount": 15000,
    "memo": "-",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258607,
    "date": "2025-07-09",
    "type": "expense",
    "category": "LGU+ 인터넷티비",
    "amount": 34100,
    "memo": "통신 렌탈 구독료",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258608,
    "date": "2025-07-09",
    "type": "expense",
    "category": "카카오-문화",
    "amount": 37000,
    "memo": "여행/문화",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258609,
    "date": "2025-07-09",
    "type": "expense",
    "category": "카카오-문화",
    "amount": 7500,
    "memo": "여행/문화",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258610,
    "date": "2025-07-09",
    "type": "expense",
    "category": "한마음문구",
    "amount": 20100,
    "memo": "사업비",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258611,
    "date": "2025-07-09",
    "type": "expense",
    "category": "롱삼",
    "amount": 534960,
    "memo": "미용비",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258612,
    "date": "2025-07-09",
    "type": "expense",
    "category": "배달",
    "amount": 20900,
    "memo": "배달",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258613,
    "date": "2025-07-10",
    "type": "expense",
    "category": "코원에너지",
    "amount": 7470,
    "memo": "관리비",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258614,
    "date": "2025-07-10",
    "type": "income",
    "category": "오미애",
    "amount": 25000,
    "memo": "미술재료대리구입",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258615,
    "date": "2025-07-11",
    "type": "expense",
    "category": "지혁이영어",
    "amount": 190000,
    "memo": "학원/교재",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258616,
    "date": "2025-07-11",
    "type": "expense",
    "category": "지혁폰요금",
    "amount": 4990,
    "memo": "통신 렌탈 구독료",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258617,
    "date": "2025-07-11",
    "type": "expense",
    "category": "가인폰요금",
    "amount": 5500,
    "memo": "통신 렌탈 구독료",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258618,
    "date": "2025-07-11",
    "type": "expense",
    "category": "다정폰요금 KT",
    "amount": 52230,
    "memo": "통신 렌탈 구독료",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258619,
    "date": "2025-07-12",
    "type": "expense",
    "category": "그린플레이트",
    "amount": 254800,
    "memo": "식당/카페",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258620,
    "date": "2025-07-12",
    "type": "expense",
    "category": "카카오페이-배문수-결혼축",
    "amount": 100000,
    "memo": "타인에게주는 용돈/선물",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258621,
    "date": "2025-07-13",
    "type": "expense",
    "category": "배달",
    "amount": 20900,
    "memo": "배달",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258622,
    "date": "2025-07-14",
    "type": "income",
    "category": "방진아",
    "amount": 6500,
    "memo": "미술재료대리구입",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258623,
    "date": "2025-07-14",
    "type": "expense",
    "category": "크레타클래스",
    "amount": 43000,
    "memo": "학원/교재",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258624,
    "date": "2025-07-14",
    "type": "expense",
    "category": "당근-수채물감미젤로",
    "amount": 36000,
    "memo": "개인쇼핑",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258625,
    "date": "2025-07-15",
    "type": "expense",
    "category": "미래애샛실비보험",
    "amount": 66550,
    "memo": "보험",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258626,
    "date": "2025-07-15",
    "type": "expense",
    "category": "지혁실비보험",
    "amount": 36990,
    "memo": "보험",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258627,
    "date": "2025-07-15",
    "type": "expense",
    "category": "미래에셋생명보험",
    "amount": 28434,
    "memo": "보험",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258628,
    "date": "2025-07-15",
    "type": "expense",
    "category": "당근-아이패드",
    "amount": 460000,
    "memo": "사업비",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258629,
    "date": "2025-07-16",
    "type": "income",
    "category": "우리은행 연회비환급",
    "amount": 17425,
    "memo": "부수입",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258630,
    "date": "2025-07-16",
    "type": "expense",
    "category": "쿠팡-식품",
    "amount": 46249,
    "memo": "식재료",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258631,
    "date": "2025-07-16",
    "type": "expense",
    "category": "당근-아이패드",
    "amount": 450000,
    "memo": "사업비",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258632,
    "date": "2025-07-17",
    "type": "expense",
    "category": "쿠팡-속눈썹펌",
    "amount": 36400,
    "memo": "미용비",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258633,
    "date": "2025-07-17",
    "type": "expense",
    "category": "지혁수영",
    "amount": 69300,
    "memo": "학원/교재",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258634,
    "date": "2025-07-17",
    "type": "expense",
    "category": "쿠팡-아이패드 필름",
    "amount": 11150,
    "memo": "생활용품",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258635,
    "date": "2025-07-18",
    "type": "expense",
    "category": "카카오페이-배민상품권-시온맘",
    "amount": 50000,
    "memo": "타인에게주는 용돈/선물",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258636,
    "date": "2025-07-19",
    "type": "expense",
    "category": "배달",
    "amount": 16000,
    "memo": "배달",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258637,
    "date": "2025-07-20",
    "type": "expense",
    "category": "하나로마트",
    "amount": 19590,
    "memo": "식재료",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258638,
    "date": "2025-07-20",
    "type": "expense",
    "category": "쿠팡-생리대",
    "amount": 11500,
    "memo": "생활용품",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258639,
    "date": "2025-07-20",
    "type": "expense",
    "category": "당근-B5복사용지",
    "amount": 16000,
    "memo": "사업비",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258640,
    "date": "2025-07-20",
    "type": "expense",
    "category": "쿠팡-수영바지",
    "amount": 18800,
    "memo": "지혁가인",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258641,
    "date": "2025-07-21",
    "type": "expense",
    "category": "복사용지",
    "amount": 25872,
    "memo": "사업비",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258642,
    "date": "2025-07-21",
    "type": "expense",
    "category": "쿠팡멤버십",
    "amount": 7890,
    "memo": "통신 렌탈 구독료",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258643,
    "date": "2025-07-21",
    "type": "expense",
    "category": "코웨이침대2개",
    "amount": 46100,
    "memo": "통신 렌탈 구독료",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258644,
    "date": "2025-07-21",
    "type": "expense",
    "category": "코웨이정수기",
    "amount": 27360,
    "memo": "통신 렌탈 구독료",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258645,
    "date": "2025-07-21",
    "type": "expense",
    "category": "LG식세기",
    "amount": 30900,
    "memo": "통신 렌탈 구독료",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258646,
    "date": "2025-07-21",
    "type": "expense",
    "category": "쿠팡-식품",
    "amount": 16770,
    "memo": "식재료",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258647,
    "date": "2025-07-22",
    "type": "expense",
    "category": "배달",
    "amount": 16541,
    "memo": "배달",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258648,
    "date": "2025-07-22",
    "type": "expense",
    "category": "쿠팡-수경",
    "amount": 8100,
    "memo": "지혁가인",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258649,
    "date": "2025-07-22",
    "type": "expense",
    "category": "쿠팡-음료수",
    "amount": 21010,
    "memo": "식재료",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258650,
    "date": "2025-07-22",
    "type": "expense",
    "category": "카카오페이-다영-삼겹살",
    "amount": 30000,
    "memo": "기타",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258651,
    "date": "2025-07-22",
    "type": "expense",
    "category": "당근-애플펜슬",
    "amount": 20000,
    "memo": "사업비",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258652,
    "date": "2025-07-23",
    "type": "expense",
    "category": "배달",
    "amount": 16000,
    "memo": "배달",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258653,
    "date": "2025-07-23",
    "type": "expense",
    "category": "쿠퍙-아이패드펜슬촉",
    "amount": 12800,
    "memo": "생활용품",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258654,
    "date": "2025-07-24",
    "type": "income",
    "category": "김혜미,오현미",
    "amount": 21500,
    "memo": "미술재료대리구입",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258655,
    "date": "2025-07-24",
    "type": "expense",
    "category": "밀크티탭",
    "amount": 84000,
    "memo": "학원/교재",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258656,
    "date": "2025-07-24",
    "type": "expense",
    "category": "카카오페이-시온맘",
    "amount": 50000,
    "memo": "타인에게주는 용돈/선물",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258657,
    "date": "2025-07-24",
    "type": "expense",
    "category": "당근-다영선반장",
    "amount": 20000,
    "memo": "기타",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258658,
    "date": "2025-07-24",
    "type": "income",
    "category": "카카오페이-다영-당근선반장",
    "amount": 20000,
    "memo": "부수입",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258659,
    "date": "2025-07-24",
    "type": "expense",
    "category": "당근-애플펜슬",
    "amount": 50000,
    "memo": "사업비",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258660,
    "date": "2025-07-25",
    "type": "income",
    "category": "아동수당",
    "amount": 100000,
    "memo": "국가지원금",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258661,
    "date": "2025-07-25",
    "type": "income",
    "category": "급여",
    "amount": 1000000,
    "memo": "상학월급",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258662,
    "date": "2025-07-25",
    "type": "expense",
    "category": "배달",
    "amount": 28000,
    "memo": "배달",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258663,
    "date": "2025-07-25",
    "type": "expense",
    "category": "니토리이케아",
    "amount": 38000,
    "memo": "생활용품",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258664,
    "date": "2025-07-26",
    "type": "expense",
    "category": "하나로마트",
    "amount": 29160,
    "memo": "식재료",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258665,
    "date": "2025-07-26",
    "type": "expense",
    "category": "화아트헤이븐커피",
    "amount": 5000,
    "memo": "식당/카페",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258666,
    "date": "2025-07-26",
    "type": "expense",
    "category": "한마음문구,빵꾸똥꾸",
    "amount": 5500,
    "memo": "지혁가인",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258667,
    "date": "2025-07-26",
    "type": "expense",
    "category": "버거킹",
    "amount": 1500,
    "memo": "식당/카페",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258668,
    "date": "2025-07-26",
    "type": "income",
    "category": "민생회복소비지원금",
    "amount": 5000,
    "memo": "국가지원금",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258669,
    "date": "2025-07-26",
    "type": "income",
    "category": "민생회복소비지원금",
    "amount": 2000,
    "memo": "국가지원금",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258670,
    "date": "2025-07-27",
    "type": "expense",
    "category": "하머니-쿠우쿠우",
    "amount": 94488,
    "memo": "식당/카페",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258671,
    "date": "2025-07-28",
    "type": "expense",
    "category": "kcp결제",
    "amount": 187264,
    "memo": "-",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258672,
    "date": "2025-07-28",
    "type": "expense",
    "category": "니토리이케아",
    "amount": 26800,
    "memo": "생활용품",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258673,
    "date": "2025-07-28",
    "type": "income",
    "category": "당근-코렐냉면기",
    "amount": 10000,
    "memo": "부수입",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258674,
    "date": "2025-07-30",
    "type": "expense",
    "category": "지하철",
    "amount": 1450,
    "memo": "교통",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258675,
    "date": "2025-07-30",
    "type": "expense",
    "category": "쿠팡-아쿠아슈즈",
    "amount": 15800,
    "memo": "지혁가인",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258676,
    "date": "2025-07-30",
    "type": "expense",
    "category": "쿠팡-생리컵",
    "amount": 31360,
    "memo": "생활용품",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258677,
    "date": "2025-07-31",
    "type": "income",
    "category": "미사초등학교",
    "amount": 986340,
    "memo": "다정월급/민들레,미사초,단기강의",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258678,
    "date": "2025-07-31",
    "type": "expense",
    "category": "나이스페이",
    "amount": 19000,
    "memo": "-",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258679,
    "date": "2025-07-31",
    "type": "income",
    "category": "오미애",
    "amount": 20000,
    "memo": "미술재료대리구입",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258680,
    "date": "2025-07-31",
    "type": "expense",
    "category": "하이패스",
    "amount": 52100,
    "memo": "교통",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258681,
    "date": "2025-08-01",
    "type": "expense",
    "category": "쿠팡-다정미니옷선반",
    "amount": 22890,
    "memo": "생활용품",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258682,
    "date": "2025-08-01",
    "type": "expense",
    "category": "골뱅이상회",
    "amount": 43500,
    "memo": "식당/카페",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258683,
    "date": "2025-08-01",
    "type": "expense",
    "category": "황소곱창",
    "amount": 69000,
    "memo": "식당/카페",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258684,
    "date": "2025-08-01",
    "type": "expense",
    "category": "티머니충전",
    "amount": 30000,
    "memo": "교통",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258685,
    "date": "2025-08-02",
    "type": "income",
    "category": "당근-아이패드미니",
    "amount": 220000,
    "memo": "부수입",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258686,
    "date": "2025-08-02",
    "type": "expense",
    "category": "애플클라우드",
    "amount": 1100,
    "memo": "통신 렌탈 구독료",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258687,
    "date": "2025-08-02",
    "type": "expense",
    "category": "한도대출이자",
    "amount": 16303,
    "memo": "이자/수수료",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258688,
    "date": "2025-08-02",
    "type": "expense",
    "category": "하나로마트",
    "amount": 17000,
    "memo": "식재료",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258689,
    "date": "2025-08-02",
    "type": "expense",
    "category": "하나로마트-시댁만두",
    "amount": 10000,
    "memo": "타인에게주는 용돈/선물",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258690,
    "date": "2025-08-02",
    "type": "expense",
    "category": "네이버-아이패드브러사",
    "amount": 8558,
    "memo": "사업비",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258691,
    "date": "2025-08-02",
    "type": "expense",
    "category": "스타필드-가인옷",
    "amount": 37800,
    "memo": "지혁가인",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258692,
    "date": "2025-08-02",
    "type": "expense",
    "category": "노브랜드",
    "amount": 6980,
    "memo": "식재료",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258693,
    "date": "2025-08-02",
    "type": "expense",
    "category": "가인아이스크림",
    "amount": 3500,
    "memo": "식당/카페",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258694,
    "date": "2025-08-02",
    "type": "expense",
    "category": "버거킹",
    "amount": 19700,
    "memo": "식당/카페",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258695,
    "date": "2025-08-02",
    "type": "expense",
    "category": "영화",
    "amount": 24400,
    "memo": "여행/문화",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258696,
    "date": "2025-08-02",
    "type": "expense",
    "category": "하나로마트",
    "amount": 92910,
    "memo": "타인에게주는 용돈/선물",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258697,
    "date": "2025-08-03",
    "type": "expense",
    "category": "유튜브프리미엄",
    "amount": 10600,
    "memo": "통신 렌탈 구독료",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258698,
    "date": "2025-08-03",
    "type": "expense",
    "category": "휴지",
    "amount": 2500,
    "memo": "여행/문화",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258699,
    "date": "2025-08-03",
    "type": "expense",
    "category": "식당",
    "amount": 45000,
    "memo": "여행/문화",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258700,
    "date": "2025-08-03",
    "type": "expense",
    "category": "배달",
    "amount": 25700,
    "memo": "여행/문화",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258701,
    "date": "2025-08-03",
    "type": "expense",
    "category": "편의점치킨다이소",
    "amount": 55900,
    "memo": "여행/문화",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258702,
    "date": "2025-08-04",
    "type": "expense",
    "category": "평창휴게소",
    "amount": 10000,
    "memo": "여행/문화",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258703,
    "date": "2025-08-04",
    "type": "expense",
    "category": "쿠팡-가인양모키링만들기",
    "amount": 7900,
    "memo": "지혁가인",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258704,
    "date": "2025-08-04",
    "type": "expense",
    "category": "쿠팡-신발선반",
    "amount": 9900,
    "memo": "생활용품",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258705,
    "date": "2025-08-04",
    "type": "expense",
    "category": "평창휴게소",
    "amount": 35000,
    "memo": "여행/문화",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258706,
    "date": "2025-08-04",
    "type": "expense",
    "category": "강원알펜시아",
    "amount": 239900,
    "memo": "여행/문화",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258707,
    "date": "2025-08-05",
    "type": "expense",
    "category": "삼성생명보험",
    "amount": 54797,
    "memo": "보험",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258708,
    "date": "2025-08-05",
    "type": "expense",
    "category": "영경쭌모임",
    "amount": 20000,
    "memo": "모임회비",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258709,
    "date": "2025-08-05",
    "type": "expense",
    "category": "아웃백",
    "amount": 33065,
    "memo": "식당/카페",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258710,
    "date": "2025-08-05",
    "type": "expense",
    "category": "트레이더스",
    "amount": 50520,
    "memo": "식재료",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258711,
    "date": "2025-08-05",
    "type": "expense",
    "category": "네이버-된장,청국장",
    "amount": 47500,
    "memo": "타인에게주는 용돈/선물",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258712,
    "date": "2025-08-05",
    "type": "expense",
    "category": "배달",
    "amount": 33800,
    "memo": "배달",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258713,
    "date": "2025-08-05",
    "type": "expense",
    "category": "가인이보험",
    "amount": 34160,
    "memo": "보험",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258714,
    "date": "2025-08-05",
    "type": "income",
    "category": "당근-종이컴",
    "amount": 3000,
    "memo": "부수입",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258715,
    "date": "2025-08-05",
    "type": "income",
    "category": "당근-수납박스",
    "amount": 3000,
    "memo": "부수입",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258716,
    "date": "2025-08-06",
    "type": "expense",
    "category": "쿠팡-바디워시",
    "amount": 12400,
    "memo": "지혁가인",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258717,
    "date": "2025-08-06",
    "type": "expense",
    "category": "배달",
    "amount": 23900,
    "memo": "배달",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258718,
    "date": "2025-08-06",
    "type": "expense",
    "category": "네이버-의자커버",
    "amount": 51800,
    "memo": "생활용품",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258719,
    "date": "2025-08-06",
    "type": "expense",
    "category": "갤럭시탭펜",
    "amount": 10900,
    "memo": "생활용품",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258720,
    "date": "2025-08-06",
    "type": "expense",
    "category": "주유",
    "amount": 54585,
    "memo": "교통",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258721,
    "date": "2025-08-06",
    "type": "expense",
    "category": "용돈",
    "amount": 24000,
    "memo": "지혁가인",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258722,
    "date": "2025-08-07",
    "type": "expense",
    "category": "네이버-세제",
    "amount": 2900,
    "memo": "생활용품",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258723,
    "date": "2025-08-07",
    "type": "expense",
    "category": "코스트코",
    "amount": 159150,
    "memo": "식재료",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258724,
    "date": "2025-08-08",
    "type": "income",
    "category": "미분류",
    "amount": 199200,
    "memo": "정아뜰리에",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258725,
    "date": "2025-08-08",
    "type": "income",
    "category": "미분류",
    "amount": 99850,
    "memo": "정아뜰리에",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258726,
    "date": "2025-08-08",
    "type": "income",
    "category": "미분류",
    "amount": 99600,
    "memo": "정아뜰리에",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258727,
    "date": "2025-08-08",
    "type": "expense",
    "category": "지혁가인이불-이케아,니토리",
    "amount": 98900,
    "memo": "생활용품",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258728,
    "date": "2025-08-08",
    "type": "expense",
    "category": "이케아",
    "amount": 10700,
    "memo": "식재료",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258729,
    "date": "2025-08-08",
    "type": "expense",
    "category": "쿠팡-설라김부각",
    "amount": 12900,
    "memo": "타인에게주는 용돈/선물",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258730,
    "date": "2025-08-08",
    "type": "expense",
    "category": "쿠팡-약과",
    "amount": 25800,
    "memo": "타인에게주는 용돈/선물",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258731,
    "date": "2025-08-08",
    "type": "expense",
    "category": "하나로마트",
    "amount": 108600,
    "memo": "식당/카페",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258732,
    "date": "2025-08-08",
    "type": "expense",
    "category": "파티-포차전",
    "amount": 39000,
    "memo": "식당/카페",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258733,
    "date": "2025-08-09",
    "type": "expense",
    "category": "테무-요미스크래치매트,수채붓",
    "amount": 18767,
    "memo": "반려동물",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258734,
    "date": "2025-08-09",
    "type": "expense",
    "category": "상학핸드폰",
    "amount": 70000,
    "memo": "통신 렌탈 구독료",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258735,
    "date": "2025-08-09",
    "type": "expense",
    "category": "다영이네파티n/1",
    "amount": 42000,
    "memo": "식당/카페",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258736,
    "date": "2025-08-09",
    "type": "expense",
    "category": "미사 편의점",
    "amount": 16450,
    "memo": "식당/카페",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258737,
    "date": "2025-08-10",
    "type": "expense",
    "category": "쿠팡-식품",
    "amount": 40090,
    "memo": "식재료",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258738,
    "date": "2025-08-10",
    "type": "expense",
    "category": "배달",
    "amount": 22300,
    "memo": "배달",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258739,
    "date": "2025-08-10",
    "type": "expense",
    "category": "다이소",
    "amount": 12000,
    "memo": "생활용품",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258740,
    "date": "2025-08-10",
    "type": "expense",
    "category": "펫랜드다람쥐",
    "amount": 83608,
    "memo": "반려동물",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258741,
    "date": "2025-08-11",
    "type": "income",
    "category": "유설라",
    "amount": 200000,
    "memo": "부수입",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258742,
    "date": "2025-08-11",
    "type": "income",
    "category": "미분류",
    "amount": 189240,
    "memo": "정아뜰리에",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258743,
    "date": "2025-08-11",
    "type": "income",
    "category": "미분류",
    "amount": 99600,
    "memo": "정아뜰리에",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258744,
    "date": "2025-08-11",
    "type": "expense",
    "category": "지혁이영어",
    "amount": 190000,
    "memo": "학원/교재",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258745,
    "date": "2025-08-11",
    "type": "expense",
    "category": "지혁폰요금",
    "amount": 4990,
    "memo": "통신 렌탈 구독료",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258746,
    "date": "2025-08-11",
    "type": "expense",
    "category": "가인폰요금",
    "amount": 10470,
    "memo": "통신 렌탈 구독료",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258747,
    "date": "2025-08-11",
    "type": "expense",
    "category": "LGU+ 인터넷티비",
    "amount": 34100,
    "memo": "통신 렌탈 구독료",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258748,
    "date": "2025-08-11",
    "type": "expense",
    "category": "다정폰요금 KT",
    "amount": 54730,
    "memo": "통신 렌탈 구독료",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258750,
    "date": "2025-08-11",
    "type": "income",
    "category": "소상공인지원금",
    "amount": 54730,
    "memo": "국가지원금",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258751,
    "date": "2025-08-11",
    "type": "expense",
    "category": "미사 편의점",
    "amount": 13700,
    "memo": "식재료",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258752,
    "date": "2025-08-11",
    "type": "expense",
    "category": "밀웜",
    "amount": 4500,
    "memo": "반려동물",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258753,
    "date": "2025-08-12",
    "type": "expense",
    "category": "쿠팡-요미사료",
    "amount": 15690,
    "memo": "반려동물",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258754,
    "date": "2025-08-12",
    "type": "expense",
    "category": "카카오페이-다영",
    "amount": 50000,
    "memo": "기타",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258755,
    "date": "2025-08-12",
    "type": "expense",
    "category": "배달",
    "amount": 21900,
    "memo": "배달",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258756,
    "date": "2025-08-12",
    "type": "expense",
    "category": "배달",
    "amount": 20900,
    "memo": "배달",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258757,
    "date": "2025-08-12",
    "type": "expense",
    "category": "당근-신일겨울히터",
    "amount": 30000,
    "memo": "생활용품",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258758,
    "date": "2025-08-13",
    "type": "expense",
    "category": "크레타클래스",
    "amount": 43000,
    "memo": "학원/교재",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258759,
    "date": "2025-08-13",
    "type": "expense",
    "category": "배달",
    "amount": 19700,
    "memo": "배달",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258760,
    "date": "2025-08-13",
    "type": "expense",
    "category": "일타포차",
    "amount": 35800,
    "memo": "식당/카페",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258761,
    "date": "2025-08-13",
    "type": "income",
    "category": "민생회복소비지원금",
    "amount": 35800,
    "memo": "국가지원금",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258762,
    "date": "2025-08-14",
    "type": "expense",
    "category": "양말목쿠팡-",
    "amount": 9950,
    "memo": "반려동물",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258763,
    "date": "2025-08-14",
    "type": "expense",
    "category": "당근-수채색연필",
    "amount": 10000,
    "memo": "개인쇼핑",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258764,
    "date": "2025-08-14",
    "type": "expense",
    "category": "놀자-아쿠아필드",
    "amount": 18900,
    "memo": "지혁가인",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258765,
    "date": "2025-08-14",
    "type": "expense",
    "category": "주민세",
    "amount": 10200,
    "memo": "세금/공과금",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258766,
    "date": "2025-08-14",
    "type": "expense",
    "category": "돌삼닭",
    "amount": 51000,
    "memo": "식당/카페",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258767,
    "date": "2025-08-14",
    "type": "income",
    "category": "민생회복소비지원금",
    "amount": 51000,
    "memo": "국가지원금",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258768,
    "date": "2025-08-14",
    "type": "expense",
    "category": "은성수산-광어",
    "amount": 39000,
    "memo": "식당/카페",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258769,
    "date": "2025-08-15",
    "type": "expense",
    "category": "스타벅스",
    "amount": 10000,
    "memo": "식당/카페",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258770,
    "date": "2025-08-15",
    "type": "expense",
    "category": "아리노마마-동대문돈까스",
    "amount": 21000,
    "memo": "식당/카페",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258771,
    "date": "2025-08-15",
    "type": "expense",
    "category": "카카오페이-동대문은팔찌",
    "amount": 39000,
    "memo": "개인쇼핑",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258772,
    "date": "2025-08-15",
    "type": "expense",
    "category": "버거킹",
    "amount": 6100,
    "memo": "식당/카페",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258773,
    "date": "2025-08-15",
    "type": "expense",
    "category": "버거킹",
    "amount": 17400,
    "memo": "식당/카페",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258774,
    "date": "2025-08-15",
    "type": "expense",
    "category": "알리-폰케이스자석펌프등",
    "amount": 56098,
    "memo": "생활용품",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258775,
    "date": "2025-08-15",
    "type": "expense",
    "category": "쥬라리움",
    "amount": 57700,
    "memo": "여행/문화",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258776,
    "date": "2025-08-16",
    "type": "expense",
    "category": "배달",
    "amount": 20000,
    "memo": "배달",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258777,
    "date": "2025-08-16",
    "type": "expense",
    "category": "꾸러기식당외1",
    "amount": 51035,
    "memo": "식당/카페",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258778,
    "date": "2025-08-17",
    "type": "expense",
    "category": "빕스",
    "amount": 94800,
    "memo": "식당/카페",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258779,
    "date": "2025-08-17",
    "type": "expense",
    "category": "오락실",
    "amount": 8500,
    "memo": "지혁가인",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258780,
    "date": "2025-08-17",
    "type": "expense",
    "category": "아이스크림",
    "amount": 1400,
    "memo": "식당/카페",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258781,
    "date": "2025-08-17",
    "type": "expense",
    "category": "쿠팡-아크릴물감",
    "amount": 21500,
    "memo": "사업비",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258782,
    "date": "2025-08-17",
    "type": "expense",
    "category": "쿠팡-키친타올",
    "amount": 6280,
    "memo": "생활용품",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258783,
    "date": "2025-08-17",
    "type": "expense",
    "category": "다이소",
    "amount": 22000,
    "memo": "생활용품",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258784,
    "date": "2025-08-18",
    "type": "income",
    "category": "그리다 단기강의",
    "amount": 203070,
    "memo": "다정월급/민들레,미사초,단기강의",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258785,
    "date": "2025-08-18",
    "type": "expense",
    "category": "지혁실비보험",
    "amount": 36990,
    "memo": "보험",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258786,
    "date": "2025-08-18",
    "type": "expense",
    "category": "미래애샛실비보험",
    "amount": 66550,
    "memo": "보험",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258787,
    "date": "2025-08-18",
    "type": "expense",
    "category": "미래에셋생명보험",
    "amount": 28434,
    "memo": "보험",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258788,
    "date": "2025-08-18",
    "type": "expense",
    "category": "올스타마트",
    "amount": 41770,
    "memo": "식재료",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258789,
    "date": "2025-08-18",
    "type": "income",
    "category": "민생회복소비지원금",
    "amount": 41770,
    "memo": "국가지원금",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258790,
    "date": "2025-08-18",
    "type": "expense",
    "category": "목동전화기",
    "amount": 7700,
    "memo": "통신 렌탈 구독료",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258791,
    "date": "2025-08-18",
    "type": "expense",
    "category": "대출이자",
    "amount": 1440571,
    "memo": "이자/수수료",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258792,
    "date": "2025-08-19",
    "type": "expense",
    "category": "가인장난감",
    "amount": 17200,
    "memo": "지혁가인",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258793,
    "date": "2025-08-19",
    "type": "expense",
    "category": "스타필드",
    "amount": 36000,
    "memo": "-",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258794,
    "date": "2025-08-19",
    "type": "expense",
    "category": "가인아이스크림",
    "amount": 3000,
    "memo": "식당/카페",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258795,
    "date": "2025-08-19",
    "type": "expense",
    "category": "스타필드-애들돈까스",
    "amount": 26000,
    "memo": "식당/카페",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258796,
    "date": "2025-08-19",
    "type": "expense",
    "category": "다이소-미술재료",
    "amount": 10000,
    "memo": "사업비",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258797,
    "date": "2025-08-19",
    "type": "expense",
    "category": "토리헤어-지혁펌",
    "amount": 40000,
    "memo": "지혁가인",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258798,
    "date": "2025-08-19",
    "type": "income",
    "category": "민생회복소비지원금",
    "amount": 40000,
    "memo": "국가지원금",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258799,
    "date": "2025-08-19",
    "type": "income",
    "category": "카카오페이-다영-돌삼닭,회,",
    "amount": 40000,
    "memo": "부수입",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258800,
    "date": "2025-08-20",
    "type": "expense",
    "category": "코웨이침대2개",
    "amount": 46100,
    "memo": "통신 렌탈 구독료",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258801,
    "date": "2025-08-20",
    "type": "expense",
    "category": "코웨이정수기",
    "amount": 27360,
    "memo": "통신 렌탈 구독료",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258802,
    "date": "2025-08-20",
    "type": "expense",
    "category": "LG식세기",
    "amount": 30900,
    "memo": "통신 렌탈 구독료",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258803,
    "date": "2025-08-20",
    "type": "expense",
    "category": "반찬",
    "amount": 17500,
    "memo": "식재료",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258804,
    "date": "2025-08-20",
    "type": "expense",
    "category": "당근-캣타워",
    "amount": 20000,
    "memo": "반려동물",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258805,
    "date": "2025-08-20",
    "type": "expense",
    "category": "주유소",
    "amount": 40000,
    "memo": "교통",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258806,
    "date": "2025-08-20",
    "type": "expense",
    "category": "배달",
    "amount": 16872,
    "memo": "배달",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258807,
    "date": "2025-08-20",
    "type": "expense",
    "category": "네이버-알파시디",
    "amount": 46900,
    "memo": "병원/약",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258808,
    "date": "2025-08-20",
    "type": "income",
    "category": "소상공인지원금",
    "amount": 40000,
    "memo": "국가지원금",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258809,
    "date": "2025-08-20",
    "type": "income",
    "category": "민생회복소비지원금",
    "amount": 17500,
    "memo": "국가지원금",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258810,
    "date": "2025-08-20",
    "type": "expense",
    "category": "산호선반",
    "amount": 35164,
    "memo": "반려동물",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258811,
    "date": "2025-08-21",
    "type": "expense",
    "category": "쿠팡멤버십",
    "amount": 7890,
    "memo": "통신 렌탈 구독료",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258812,
    "date": "2025-08-21",
    "type": "expense",
    "category": "알리-바오홍,붓케이스",
    "amount": 111508,
    "memo": "미술재료대리구입",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258813,
    "date": "2025-08-21",
    "type": "expense",
    "category": "카카오페이-바나나우유",
    "amount": 3600,
    "memo": "타인에게주는 용돈/선물",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258814,
    "date": "2025-08-21",
    "type": "expense",
    "category": "넷플릭스프리미엄",
    "amount": 12900,
    "memo": "통신 렌탈 구독료",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258815,
    "date": "2025-08-22",
    "type": "expense",
    "category": "부엉이산장",
    "amount": 70000,
    "memo": "식당/카페",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258816,
    "date": "2025-08-22",
    "type": "expense",
    "category": "쿠팡-식품",
    "amount": 24830,
    "memo": "식재료",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258817,
    "date": "2025-08-22",
    "type": "income",
    "category": "민생회복소비지원금",
    "amount": 70000,
    "memo": "국가지원금",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258818,
    "date": "2025-08-22",
    "type": "income",
    "category": "갤럭시탭판매",
    "amount": 70000,
    "memo": "부수입",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258819,
    "date": "2025-08-22",
    "type": "expense",
    "category": "알리-쌀20kg 고양이모래 폰거치대",
    "amount": 70000,
    "memo": "생활용품",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258820,
    "date": "2025-08-22",
    "type": "expense",
    "category": "티빙",
    "amount": 5500,
    "memo": "통신 렌탈 구독료",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258821,
    "date": "2025-08-22",
    "type": "expense",
    "category": "목동인터넷tv",
    "amount": 38500,
    "memo": "통신 렌탈 구독료",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258822,
    "date": "2025-08-22",
    "type": "expense",
    "category": "상하기종합보험",
    "amount": 70110,
    "memo": "보험",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258823,
    "date": "2025-08-23",
    "type": "expense",
    "category": "버거킹",
    "amount": 11500,
    "memo": "식당/카페",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258824,
    "date": "2025-08-23",
    "type": "expense",
    "category": "시월애",
    "amount": 32000,
    "memo": "타인에게주는 용돈/선물",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258825,
    "date": "2025-08-23",
    "type": "expense",
    "category": "천하푸드",
    "amount": 15000,
    "memo": "타인에게주는 용돈/선물",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258826,
    "date": "2025-08-23",
    "type": "expense",
    "category": "가인이인형옷",
    "amount": 10800,
    "memo": "지혁가인",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258827,
    "date": "2025-08-23",
    "type": "expense",
    "category": "차량에어콘필터",
    "amount": 13500,
    "memo": "교통",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258828,
    "date": "2025-08-23",
    "type": "expense",
    "category": "산호프략베이스",
    "amount": 11000,
    "memo": "반려동물",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258829,
    "date": "2025-08-23",
    "type": "expense",
    "category": "알리-콜라,uv필터",
    "amount": 30472,
    "memo": "생활용품",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258830,
    "date": "2025-08-23",
    "type": "expense",
    "category": "버커깅,이마트",
    "amount": 20880,
    "memo": "식당/카페",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258831,
    "date": "2025-08-23",
    "type": "expense",
    "category": "식대쿠폰10장",
    "amount": 65000,
    "memo": "식당/카페",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258832,
    "date": "2025-08-23",
    "type": "expense",
    "category": "알리-폰케이스",
    "amount": 40963,
    "memo": "생활용품",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258833,
    "date": "2025-08-23",
    "type": "income",
    "category": "민생회복소비지원금",
    "amount": 150000,
    "memo": "국가지원금",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258834,
    "date": "2025-08-23",
    "type": "expense",
    "category": "온누리-돌삼닭",
    "amount": 36000,
    "memo": "식당/카페",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258835,
    "date": "2025-08-24",
    "type": "expense",
    "category": "카카오페이-유미-속초바다",
    "amount": 65000,
    "memo": "여행/문화",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258836,
    "date": "2025-08-24",
    "type": "income",
    "category": "카카오페이-다영-불금술값",
    "amount": 78000,
    "memo": "부수입",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258837,
    "date": "2025-08-24",
    "type": "expense",
    "category": "쿠팡이츠",
    "amount": 18800,
    "memo": "배달",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258838,
    "date": "2025-08-24",
    "type": "expense",
    "category": "점핑파크10회권",
    "amount": 79000,
    "memo": "여행/문화",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258839,
    "date": "2025-08-25",
    "type": "income",
    "category": "아동수당",
    "amount": 100000,
    "memo": "국가지원금",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258840,
    "date": "2025-08-25",
    "type": "income",
    "category": "급여",
    "amount": 1100000,
    "memo": "상학월급",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258841,
    "date": "2025-08-25",
    "type": "expense",
    "category": "폴콘블랙",
    "amount": 6000,
    "memo": "식당/카페",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258842,
    "date": "2025-08-25",
    "type": "expense",
    "category": "폴콘블랙-선경",
    "amount": 6500,
    "memo": "타인에게주는 용돈/선물",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258843,
    "date": "2025-08-25",
    "type": "expense",
    "category": "밀크티탭",
    "amount": 84000,
    "memo": "학원/교재",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258844,
    "date": "2025-08-25",
    "type": "expense",
    "category": "쿠팡-넥쿨러",
    "amount": 13890,
    "memo": "생활용품",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258845,
    "date": "2025-08-25",
    "type": "expense",
    "category": "배달",
    "amount": 31400,
    "memo": "배달",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258846,
    "date": "2025-08-25",
    "type": "income",
    "category": "민생회복소비지원금",
    "amount": 6000,
    "memo": "국가지원금",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258847,
    "date": "2025-08-25",
    "type": "income",
    "category": "민생회복소비지원금",
    "amount": 6500,
    "memo": "국가지원금",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258848,
    "date": "2025-08-25",
    "type": "expense",
    "category": "유씨적금",
    "amount": 100000,
    "memo": "모임회비",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258849,
    "date": "2025-08-25",
    "type": "income",
    "category": "상하기급여",
    "amount": 4041670,
    "memo": "상학월급",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258851,
    "date": "2025-08-26",
    "type": "expense",
    "category": "네이버-고양이선반",
    "amount": 72000,
    "memo": "반려동물",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258852,
    "date": "2025-08-26",
    "type": "expense",
    "category": "하나로마트",
    "amount": 34200,
    "memo": "식재료",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258853,
    "date": "2025-08-26",
    "type": "expense",
    "category": "아파트관리비",
    "amount": 345880,
    "memo": "관리비",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258854,
    "date": "2025-08-27",
    "type": "expense",
    "category": "은성수산-광어",
    "amount": 55000,
    "memo": "식당/카페",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258855,
    "date": "2025-08-28",
    "type": "expense",
    "category": "티머니등록",
    "amount": 50000,
    "memo": "교통",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258856,
    "date": "2025-08-28",
    "type": "expense",
    "category": "하나로마트",
    "amount": 25340,
    "memo": "식재료",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258857,
    "date": "2025-08-28",
    "type": "expense",
    "category": "크린토피아ㅡ바지",
    "amount": 4000,
    "memo": "생활용품",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258858,
    "date": "2025-08-29",
    "type": "expense",
    "category": "아웃백",
    "amount": 20315,
    "memo": "식당/카페",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258859,
    "date": "2025-08-29",
    "type": "expense",
    "category": "니토리이케아",
    "amount": 41000,
    "memo": "생활용품",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258860,
    "date": "2025-08-29",
    "type": "expense",
    "category": "김신와규-소고기장조림",
    "amount": 106800,
    "memo": "타인에게주는 용돈/선물",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258861,
    "date": "2025-08-29",
    "type": "expense",
    "category": "어플-영어리딩",
    "amount": 64900,
    "memo": "학원/교재",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258862,
    "date": "2025-08-29",
    "type": "expense",
    "category": "쿠팡-애들넥쿨러",
    "amount": 22700,
    "memo": "지혁가인",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258863,
    "date": "2025-08-29",
    "type": "income",
    "category": "민생회복소비지원금",
    "amount": 106800,
    "memo": "국가지원금",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258864,
    "date": "2025-08-29",
    "type": "expense",
    "category": "하나로마트",
    "amount": 16450,
    "memo": "식재료",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258865,
    "date": "2025-08-29",
    "type": "expense",
    "category": "박일수산-전어",
    "amount": 56000,
    "memo": "식당/카페",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258866,
    "date": "2025-08-30",
    "type": "expense",
    "category": "주유",
    "amount": 40000,
    "memo": "교통",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258867,
    "date": "2025-08-30",
    "type": "expense",
    "category": "알리-새우패티",
    "amount": 11530,
    "memo": "식재료",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258868,
    "date": "2025-08-31",
    "type": "expense",
    "category": "버스지하철",
    "amount": 6400,
    "memo": "교통",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258869,
    "date": "2025-08-31",
    "type": "expense",
    "category": "은성수산-전어",
    "amount": 77000,
    "memo": "식당/카페",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258870,
    "date": "2025-08-31",
    "type": "expense",
    "category": "버거킹",
    "amount": 24500,
    "memo": "식당/카페",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258871,
    "date": "2025-08-31",
    "type": "expense",
    "category": "산호구매",
    "amount": 80000,
    "memo": "반려동물",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258872,
    "date": "2025-08-31",
    "type": "expense",
    "category": "하이패스",
    "amount": 72860,
    "memo": "교통",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258873,
    "date": "2025-09-01",
    "type": "expense",
    "category": "하나로마트",
    "amount": 13640,
    "memo": "식재료",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258874,
    "date": "2025-09-01",
    "type": "income",
    "category": "당근-액자",
    "amount": 15000,
    "memo": "부수입",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258875,
    "date": "2025-09-02",
    "type": "expense",
    "category": "애플클라우드",
    "amount": 1100,
    "memo": "통신 렌탈 구독료",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258876,
    "date": "2025-09-02",
    "type": "expense",
    "category": "쿠팡-식품",
    "amount": 37240,
    "memo": "식재료",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258877,
    "date": "2025-09-02",
    "type": "expense",
    "category": "앱구독-수학연산",
    "amount": 44000,
    "memo": "학원/교재",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258878,
    "date": "2025-09-02",
    "type": "expense",
    "category": "led전등리폼",
    "amount": 10700,
    "memo": "생활용품",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258879,
    "date": "2025-09-03",
    "type": "expense",
    "category": "유튜브프리미엄",
    "amount": 10600,
    "memo": "통신 렌탈 구독료",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258880,
    "date": "2025-09-03",
    "type": "expense",
    "category": "만차이-중국집",
    "amount": 42000,
    "memo": "식당/카페",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258881,
    "date": "2025-09-03",
    "type": "expense",
    "category": "용돈",
    "amount": 24000,
    "memo": "지혁가인",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258882,
    "date": "2025-09-04",
    "type": "income",
    "category": "류나미",
    "amount": 36000,
    "memo": "미술재료대리구입",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258883,
    "date": "2025-09-04",
    "type": "income",
    "category": "정자경",
    "amount": 36000,
    "memo": "미술재료대리구입",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258884,
    "date": "2025-09-04",
    "type": "income",
    "category": "배움이",
    "amount": 21000,
    "memo": "미술재료대리구입",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258885,
    "date": "2025-09-04",
    "type": "income",
    "category": "권미란",
    "amount": 21000,
    "memo": "미술재료대리구입",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258886,
    "date": "2025-09-04",
    "type": "expense",
    "category": "쿠팡-엄마참치액",
    "amount": 14980,
    "memo": "타인에게주는 용돈/선물",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258887,
    "date": "2025-09-04",
    "type": "expense",
    "category": "다이소",
    "amount": 10000,
    "memo": "생활용품",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258888,
    "date": "2025-09-04",
    "type": "expense",
    "category": "월미당-쌀국수",
    "amount": 27000,
    "memo": "식당/카페",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258889,
    "date": "2025-09-05",
    "type": "income",
    "category": "미분류",
    "amount": 199200,
    "memo": "정아뜰리에",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258890,
    "date": "2025-09-05",
    "type": "income",
    "category": "미분류",
    "amount": 99850,
    "memo": "정아뜰리에",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258891,
    "date": "2025-09-05",
    "type": "income",
    "category": "미분류",
    "amount": 99600,
    "memo": "정아뜰리에",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258892,
    "date": "2025-09-05",
    "type": "income",
    "category": "기업카드영사",
    "amount": 50000,
    "memo": "부수입",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258893,
    "date": "2025-09-05",
    "type": "expense",
    "category": "영경쭌모임",
    "amount": 20000,
    "memo": "모임회비",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258894,
    "date": "2025-09-05",
    "type": "expense",
    "category": "가인-나야나야인형",
    "amount": 17133,
    "memo": "지혁가인",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258895,
    "date": "2025-09-05",
    "type": "expense",
    "category": "삼성생명보험",
    "amount": 54797,
    "memo": "보험",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258896,
    "date": "2025-09-05",
    "type": "expense",
    "category": "오현미-미술재료",
    "amount": 82000,
    "memo": "미술재료대리구입",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258897,
    "date": "2025-09-05",
    "type": "expense",
    "category": "알리-스케치북",
    "amount": 47325,
    "memo": "미술재료대리구입",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258898,
    "date": "2025-09-05",
    "type": "expense",
    "category": "경주-편의점",
    "amount": 13900,
    "memo": "여행/문화",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258899,
    "date": "2025-09-05",
    "type": "income",
    "category": "오현미",
    "amount": 82000,
    "memo": "미술재료대리구입",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258900,
    "date": "2025-09-05",
    "type": "expense",
    "category": "가인이보험",
    "amount": 34160,
    "memo": "보험",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258901,
    "date": "2025-09-05",
    "type": "income",
    "category": "카드영사",
    "amount": 20000,
    "memo": "부수입",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258902,
    "date": "2025-09-05",
    "type": "expense",
    "category": "골드할인마트",
    "amount": 17750,
    "memo": "식재료",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258903,
    "date": "2025-09-05",
    "type": "expense",
    "category": "봄봄",
    "amount": 18000,
    "memo": "식당/카페",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258904,
    "date": "2025-09-06",
    "type": "income",
    "category": "경주숙소 당근판매",
    "amount": 55000,
    "memo": "부수입",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258905,
    "date": "2025-09-06",
    "type": "expense",
    "category": "이자",
    "amount": 23601,
    "memo": "이자/수수료",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258906,
    "date": "2025-09-06",
    "type": "expense",
    "category": "경주-편의점",
    "amount": 12750,
    "memo": "여행/문화",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258907,
    "date": "2025-09-06",
    "type": "expense",
    "category": "경주-유수정",
    "amount": 46000,
    "memo": "여행/문화",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258908,
    "date": "2025-09-06",
    "type": "expense",
    "category": "경주-바실라",
    "amount": 14000,
    "memo": "여행/문화",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258909,
    "date": "2025-09-06",
    "type": "expense",
    "category": "경주-간식",
    "amount": 6900,
    "memo": "여행/문화",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258910,
    "date": "2025-09-06",
    "type": "expense",
    "category": "경주-수첩",
    "amount": 4000,
    "memo": "여행/문화",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258911,
    "date": "2025-09-06",
    "type": "expense",
    "category": "경주-백송",
    "amount": 13000,
    "memo": "여행/문화",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258912,
    "date": "2025-09-06",
    "type": "expense",
    "category": "경주-간식",
    "amount": 3000,
    "memo": "여행/문화",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258913,
    "date": "2025-09-06",
    "type": "expense",
    "category": "경주-기타",
    "amount": 8000,
    "memo": "여행/문화",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258914,
    "date": "2025-09-06",
    "type": "expense",
    "category": "경주-인생네컷",
    "amount": 5000,
    "memo": "여행/문화",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258915,
    "date": "2025-09-06",
    "type": "expense",
    "category": "경주-십원빵",
    "amount": 6500,
    "memo": "여행/문화",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258916,
    "date": "2025-09-06",
    "type": "expense",
    "category": "경주-편의점",
    "amount": 14500,
    "memo": "여행/문화",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258917,
    "date": "2025-09-06",
    "type": "expense",
    "category": "경주-전동차",
    "amount": 40000,
    "memo": "여행/문화",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258918,
    "date": "2025-09-06",
    "type": "expense",
    "category": "경주여행",
    "amount": 109900,
    "memo": "여행/문화",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258919,
    "date": "2025-09-06",
    "type": "expense",
    "category": "경주-주유",
    "amount": 54511,
    "memo": "여행/문화",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258920,
    "date": "2025-09-07",
    "type": "expense",
    "category": "경주-기타",
    "amount": 1100,
    "memo": "여행/문화",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258921,
    "date": "2025-09-07",
    "type": "expense",
    "category": "경주-편의점",
    "amount": 18500,
    "memo": "여행/문화",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258922,
    "date": "2025-09-07",
    "type": "expense",
    "category": "경주-오아르미술관",
    "amount": 24300,
    "memo": "여행/문화",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258923,
    "date": "2025-09-07",
    "type": "expense",
    "category": "경주-뱃지",
    "amount": 12500,
    "memo": "여행/문화",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258924,
    "date": "2025-09-07",
    "type": "expense",
    "category": "경주-모리커피",
    "amount": 5000,
    "memo": "여행/문화",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258925,
    "date": "2025-09-07",
    "type": "expense",
    "category": "경주-몬치치,머리핀",
    "amount": 28000,
    "memo": "여행/문화",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258926,
    "date": "2025-09-07",
    "type": "expense",
    "category": "경주-포석로",
    "amount": 5000,
    "memo": "여행/문화",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258927,
    "date": "2025-09-07",
    "type": "expense",
    "category": "경주여행",
    "amount": 282400,
    "memo": "여행/문화",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258928,
    "date": "2025-09-08",
    "type": "income",
    "category": "미분류",
    "amount": 99600,
    "memo": "정아뜰리에",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258929,
    "date": "2025-09-08",
    "type": "income",
    "category": "미분류",
    "amount": 99600,
    "memo": "정아뜰리에",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258930,
    "date": "2025-09-08",
    "type": "expense",
    "category": "경주-편의점",
    "amount": 8850,
    "memo": "여행/문화",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258931,
    "date": "2025-09-08",
    "type": "expense",
    "category": "알리-스케치북",
    "amount": 52339,
    "memo": "미술재료대리구입",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258932,
    "date": "2025-09-08",
    "type": "expense",
    "category": "인터넷",
    "amount": 27200,
    "memo": "-",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258933,
    "date": "2025-09-09",
    "type": "income",
    "category": "미사초등학교",
    "amount": 261090,
    "memo": "다정월급/민들레,미사초,단기강의",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258934,
    "date": "2025-09-09",
    "type": "income",
    "category": "갤럭시s24 당근판매",
    "amount": 450000,
    "memo": "부수입",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258935,
    "date": "2025-09-09",
    "type": "expense",
    "category": "하나로마트",
    "amount": 27270,
    "memo": "식재료",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258936,
    "date": "2025-09-09",
    "type": "expense",
    "category": "상학핸드폰",
    "amount": 70000,
    "memo": "통신 렌탈 구독료",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258937,
    "date": "2025-09-10",
    "type": "income",
    "category": "아파트하자판결금",
    "amount": 700000,
    "memo": "부수입",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258938,
    "date": "2025-09-10",
    "type": "expense",
    "category": "kt->LG U+ 위약금 이용료 등등",
    "amount": 359170,
    "memo": "통신 렌탈 구독료",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258939,
    "date": "2025-09-10",
    "type": "income",
    "category": "소상공인지원금",
    "amount": 359170,
    "memo": "국가지원금",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258940,
    "date": "2025-09-11",
    "type": "income",
    "category": "김마리아",
    "amount": 21000,
    "memo": "미술재료대리구입",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258941,
    "date": "2025-09-11",
    "type": "expense",
    "category": "자혁폰요금",
    "amount": 4990,
    "memo": "통신 렌탈 구독료",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258942,
    "date": "2025-09-11",
    "type": "expense",
    "category": "가인폰요금",
    "amount": 11110,
    "memo": "통신 렌탈 구독료",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258943,
    "date": "2025-09-11",
    "type": "expense",
    "category": "쿠팡-애들썬크림",
    "amount": 16460,
    "memo": "생활용품",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258944,
    "date": "2025-09-11",
    "type": "expense",
    "category": "지혁이영어",
    "amount": 190000,
    "memo": "학원/교재",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258945,
    "date": "2025-09-11",
    "type": "expense",
    "category": "배달",
    "amount": 30900,
    "memo": "배달",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258946,
    "date": "2025-09-11",
    "type": "expense",
    "category": "코원에너지",
    "amount": 7490,
    "memo": "관리비",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258947,
    "date": "2025-09-11",
    "type": "income",
    "category": "당근",
    "amount": 3000,
    "memo": "부수입",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258948,
    "date": "2025-09-12",
    "type": "income",
    "category": "그리다 단기강의",
    "amount": 270760,
    "memo": "다정월급/민들레,미사초,단기강의",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258949,
    "date": "2025-09-12",
    "type": "expense",
    "category": "하나로마트",
    "amount": 18440,
    "memo": "식재료",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258950,
    "date": "2025-09-13",
    "type": "expense",
    "category": "쿠팡-식품",
    "amount": 18630,
    "memo": "식재료",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258951,
    "date": "2025-09-13",
    "type": "expense",
    "category": "쿠팡-라밸",
    "amount": 12900,
    "memo": "생활용품",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258952,
    "date": "2025-09-13",
    "type": "expense",
    "category": "하나로마트",
    "amount": 22660,
    "memo": "식재료",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258953,
    "date": "2025-09-13",
    "type": "expense",
    "category": "박일수산-전어",
    "amount": 35000,
    "memo": "식당/카페",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258954,
    "date": "2025-09-13",
    "type": "expense",
    "category": "목동-점심초밥",
    "amount": 45800,
    "memo": "배달",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258955,
    "date": "2025-09-14",
    "type": "expense",
    "category": "테무-스케치북,카드지갑,폰받침대",
    "amount": 44659,
    "memo": "생활용품",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258956,
    "date": "2025-09-14",
    "type": "expense",
    "category": "호수공원식당",
    "amount": 29300,
    "memo": "식당/카페",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258957,
    "date": "2025-09-14",
    "type": "expense",
    "category": "점핑파크",
    "amount": 5000,
    "memo": "여행/문화",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258958,
    "date": "2025-09-15",
    "type": "expense",
    "category": "크레타클래스",
    "amount": 43000,
    "memo": "학원/교재",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258959,
    "date": "2025-09-15",
    "type": "expense",
    "category": "LGU+ 인터넷티비",
    "amount": 39590,
    "memo": "통신 렌탈 구독료",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258960,
    "date": "2025-09-15",
    "type": "expense",
    "category": "알리",
    "amount": 60147,
    "memo": "-",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258961,
    "date": "2025-09-15",
    "type": "expense",
    "category": "미래에셋생명보험",
    "amount": 28434,
    "memo": "보험",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258962,
    "date": "2025-09-15",
    "type": "expense",
    "category": "미래애샛실비보험",
    "amount": 66550,
    "memo": "보험",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258963,
    "date": "2025-09-15",
    "type": "expense",
    "category": "스타벅스",
    "amount": 10000,
    "memo": "식당/카페",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258964,
    "date": "2025-09-15",
    "type": "expense",
    "category": "지혁실비보험",
    "amount": 36990,
    "memo": "보험",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258965,
    "date": "2025-09-15",
    "type": "expense",
    "category": "쿠팡-소불고기,모기약",
    "amount": 22910,
    "memo": "식재료",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258966,
    "date": "2025-09-15",
    "type": "income",
    "category": "소상공인지원금",
    "amount": 38610,
    "memo": "국가지원금",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258967,
    "date": "2025-09-15",
    "type": "expense",
    "category": "은성수산-전어",
    "amount": 35000,
    "memo": "식당/카페",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258968,
    "date": "2025-09-15",
    "type": "expense",
    "category": "주유",
    "amount": 56000,
    "memo": "교통",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258969,
    "date": "2025-09-15",
    "type": "expense",
    "category": "산호구매",
    "amount": 20000,
    "memo": "반려동물",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258970,
    "date": "2025-09-16",
    "type": "expense",
    "category": "쿠팡-음료수",
    "amount": 25010,
    "memo": "식재료",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258971,
    "date": "2025-09-16",
    "type": "expense",
    "category": "cu-쏘주",
    "amount": 6600,
    "memo": "식재료",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258972,
    "date": "2025-09-17",
    "type": "expense",
    "category": "배달",
    "amount": 19083,
    "memo": "배달",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258973,
    "date": "2025-09-17",
    "type": "expense",
    "category": "하나로마트",
    "amount": 21100,
    "memo": "식재료",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258974,
    "date": "2025-09-18",
    "type": "expense",
    "category": "쿠팡-키앨",
    "amount": 34500,
    "memo": "생활용품",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258975,
    "date": "2025-09-18",
    "type": "expense",
    "category": "다영이네파티n/1",
    "amount": 60000,
    "memo": "식당/카페",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258976,
    "date": "2025-09-18",
    "type": "expense",
    "category": "목동전화기",
    "amount": 7700,
    "memo": "통신 렌탈 구독료",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258977,
    "date": "2025-09-18",
    "type": "expense",
    "category": "대출이자",
    "amount": 1440571,
    "memo": "이자/수수료",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258978,
    "date": "2025-09-19",
    "type": "expense",
    "category": "지혁수영",
    "amount": 23100,
    "memo": "학원/교재",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258979,
    "date": "2025-09-19",
    "type": "expense",
    "category": "재산세",
    "amount": 325910,
    "memo": "세금/공과금",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258980,
    "date": "2025-09-20",
    "type": "expense",
    "category": "네아버-스캐차북,펜",
    "amount": 29250,
    "memo": "미술재료대리구입",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258981,
    "date": "2025-09-20",
    "type": "income",
    "category": "이미경",
    "amount": 20000,
    "memo": "미술재료대리구입",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258982,
    "date": "2025-09-20",
    "type": "income",
    "category": "당근-코롱빨간잠바",
    "amount": 20000,
    "memo": "부수입",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258983,
    "date": "2025-09-20",
    "type": "expense",
    "category": "뚝섬-편의점",
    "amount": 59700,
    "memo": "여행/문화",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258984,
    "date": "2025-09-20",
    "type": "expense",
    "category": "목동-중국집",
    "amount": 22810,
    "memo": "식당/카페",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258985,
    "date": "2025-09-20",
    "type": "expense",
    "category": "회사경조사2회",
    "amount": 60000,
    "memo": "기타",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258986,
    "date": "2025-09-21",
    "type": "expense",
    "category": "쿠팡멤버십",
    "amount": 7890,
    "memo": "통신 렌탈 구독료",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258987,
    "date": "2025-09-21",
    "type": "expense",
    "category": "편의점",
    "amount": 5300,
    "memo": "식재료",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258988,
    "date": "2025-09-21",
    "type": "expense",
    "category": "만화카페",
    "amount": 17500,
    "memo": "여행/문화",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258989,
    "date": "2025-09-21",
    "type": "income",
    "category": "민생회복소비지원금",
    "amount": 17500,
    "memo": "국가지원금",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258990,
    "date": "2025-09-21",
    "type": "income",
    "category": "민생회복소비지원금",
    "amount": 5300,
    "memo": "국가지원금",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258991,
    "date": "2025-09-21",
    "type": "expense",
    "category": "반미샌드위치",
    "amount": 22300,
    "memo": "식당/카페",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258992,
    "date": "2025-09-22",
    "type": "expense",
    "category": "편의점-혼술",
    "amount": 4300,
    "memo": "식당/카페",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258993,
    "date": "2025-09-22",
    "type": "expense",
    "category": "코웨이침대2개",
    "amount": 46100,
    "memo": "통신 렌탈 구독료",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258994,
    "date": "2025-09-22",
    "type": "expense",
    "category": "코웨이정수기",
    "amount": 27360,
    "memo": "통신 렌탈 구독료",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258995,
    "date": "2025-09-22",
    "type": "expense",
    "category": "LG식세기",
    "amount": 30900,
    "memo": "통신 렌탈 구독료",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258996,
    "date": "2025-09-22",
    "type": "expense",
    "category": "유우조우",
    "amount": 37000,
    "memo": "식당/카페",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258997,
    "date": "2025-09-22",
    "type": "expense",
    "category": "상하기종합보험",
    "amount": 70110,
    "memo": "보험",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258998,
    "date": "2025-09-22",
    "type": "income",
    "category": "민생회복소비지원금",
    "amount": 4300,
    "memo": "국가지원금",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417258999,
    "date": "2025-09-22",
    "type": "expense",
    "category": "크린토피아ㅡ바지",
    "amount": 4000,
    "memo": "생활용품",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417259000,
    "date": "2025-09-22",
    "type": "expense",
    "category": "목동인터넷tv",
    "amount": 38500,
    "memo": "통신 렌탈 구독료",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417259001,
    "date": "2025-09-23",
    "type": "expense",
    "category": "폴콘블랙",
    "amount": 12000,
    "memo": "식당/카페",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417259002,
    "date": "2025-09-23",
    "type": "income",
    "category": "민생회복소비지원금",
    "amount": 12000,
    "memo": "국가지원금",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417259003,
    "date": "2025-09-23",
    "type": "expense",
    "category": "하나로마트",
    "amount": 17660,
    "memo": "식재료",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417259004,
    "date": "2025-09-23",
    "type": "expense",
    "category": "삼남매회비",
    "amount": 50000,
    "memo": "모임회비",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417259005,
    "date": "2025-09-23",
    "type": "expense",
    "category": "지혁수학책",
    "amount": 14600,
    "memo": "학원/교재",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417259006,
    "date": "2025-09-23",
    "type": "expense",
    "category": "레고조립판",
    "amount": 12000,
    "memo": "생활용품",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417259007,
    "date": "2025-09-24",
    "type": "expense",
    "category": "밀크티탭",
    "amount": 84000,
    "memo": "학원/교재",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417259008,
    "date": "2025-09-24",
    "type": "expense",
    "category": "아파트관리비",
    "amount": 351130,
    "memo": "관리비",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417259009,
    "date": "2025-09-24",
    "type": "expense",
    "category": "카카오-다영-지혁바지",
    "amount": 20000,
    "memo": "지혁가인",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417259010,
    "date": "2025-09-25",
    "type": "income",
    "category": "상학이월급",
    "amount": 5041670,
    "memo": "상학월급",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417259011,
    "date": "2025-09-25",
    "type": "expense",
    "category": "쿠팡",
    "amount": 25150,
    "memo": "식재료",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417259012,
    "date": "2025-09-25",
    "type": "income",
    "category": "권미란,류나미,박소영",
    "amount": 60000,
    "memo": "미술재료대리구입",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417259013,
    "date": "2025-09-25",
    "type": "expense",
    "category": "식대쿠폰10장",
    "amount": 65000,
    "memo": "식당/카페",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417259014,
    "date": "2025-09-25",
    "type": "expense",
    "category": "유씨적금",
    "amount": 100000,
    "memo": "모임회비",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417259015,
    "date": "2025-09-25",
    "type": "expense",
    "category": "유우조우",
    "amount": 20927,
    "memo": "식당/카페",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417259016,
    "date": "2025-09-26",
    "type": "expense",
    "category": "미사초-유지혁",
    "amount": 82800,
    "memo": "학원/교재",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417259017,
    "date": "2025-09-26",
    "type": "income",
    "category": "당근-밤",
    "amount": 15000,
    "memo": "부수입",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417259018,
    "date": "2025-09-27",
    "type": "expense",
    "category": "엄마집-초밥",
    "amount": 33700,
    "memo": "배달",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417259019,
    "date": "2025-09-27",
    "type": "expense",
    "category": "led전구3개구매",
    "amount": 10000,
    "memo": "생활용품",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417259020,
    "date": "2025-09-27",
    "type": "expense",
    "category": "카페",
    "amount": 12091,
    "memo": "식당/카페",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417259021,
    "date": "2025-09-27",
    "type": "income",
    "category": "당근-밤",
    "amount": 28000,
    "memo": "부수입",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417259022,
    "date": "2025-09-28",
    "type": "expense",
    "category": "미사도서관-카페주차",
    "amount": 13000,
    "memo": "여행/문화",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417259023,
    "date": "2025-09-28",
    "type": "expense",
    "category": "순대고집",
    "amount": 24182,
    "memo": "식당/카페",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417259024,
    "date": "2025-09-29",
    "type": "expense",
    "category": "주유",
    "amount": 51486,
    "memo": "교통",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417259025,
    "date": "2025-09-29",
    "type": "expense",
    "category": "김가네",
    "amount": 16276,
    "memo": "식당/카페",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417259026,
    "date": "2025-09-30",
    "type": "expense",
    "category": "유우조우",
    "amount": 27000,
    "memo": "식당/카페",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417259027,
    "date": "2025-09-30",
    "type": "expense",
    "category": "중국집",
    "amount": 20927,
    "memo": "식당/카페",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417259028,
    "date": "2025-09-30",
    "type": "expense",
    "category": "종합감기약",
    "amount": 5580,
    "memo": "병원/약",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417259029,
    "date": "2025-09-30",
    "type": "expense",
    "category": "씨유",
    "amount": 2697,
    "memo": "식재료",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417259030,
    "date": "2025-09-30",
    "type": "expense",
    "category": "씨유-삼각김밥",
    "amount": 2697,
    "memo": "식재료",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417259031,
    "date": "2025-09-30",
    "type": "expense",
    "category": "하이패스",
    "amount": 87800,
    "memo": "교통",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417259032,
    "date": "2025-10-01",
    "type": "expense",
    "category": "은성수산-전어광어새우",
    "amount": 47000,
    "memo": "배달",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417259033,
    "date": "2025-10-01",
    "type": "expense",
    "category": "당근-지혁 가인 옷들",
    "amount": 40000,
    "memo": "지혁가인",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417259034,
    "date": "2025-10-01",
    "type": "income",
    "category": "상학-추석보너스",
    "amount": 200000,
    "memo": "부수입",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417259035,
    "date": "2025-10-01",
    "type": "expense",
    "category": "led전등구매",
    "amount": 10700,
    "memo": "생활용품",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417259036,
    "date": "2025-10-01",
    "type": "expense",
    "category": "용돈",
    "amount": 24000,
    "memo": "지혁가인",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417259037,
    "date": "2025-10-02",
    "type": "expense",
    "category": "경주주차벌금",
    "amount": 64000,
    "memo": "세금/공과금",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417259038,
    "date": "2025-10-02",
    "type": "expense",
    "category": "쿠팡",
    "amount": 25070,
    "memo": "식재료",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417259039,
    "date": "2025-10-02",
    "type": "expense",
    "category": "당근-지혁 경량패딩",
    "amount": 35000,
    "memo": "지혁가인",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417259040,
    "date": "2025-10-02",
    "type": "income",
    "category": "미사초튜터",
    "amount": 1160000,
    "memo": "다정월급/민들레,미사초,단기강의",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417259041,
    "date": "2025-10-02",
    "type": "expense",
    "category": "버거킹",
    "amount": 16000,
    "memo": "식당/카페",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417259042,
    "date": "2025-10-03",
    "type": "expense",
    "category": "크레타클래스",
    "amount": 43000,
    "memo": "학원/교재",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417259043,
    "date": "2025-10-03",
    "type": "expense",
    "category": "쿠팡-요미사료",
    "amount": 15000,
    "memo": "반려동물",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417259044,
    "date": "2025-10-03",
    "type": "expense",
    "category": "쿠팡-지혁영어교재",
    "amount": 14000,
    "memo": "학원/교재",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417259045,
    "date": "2025-10-03",
    "type": "income",
    "category": "정아뜰리에",
    "amount": 597850,
    "memo": "정아뜰리에",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417259046,
    "date": "2025-10-03",
    "type": "expense",
    "category": "두끼-즉석떡볶이",
    "amount": 43600,
    "memo": "식당/카페",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417259047,
    "date": "2025-10-03",
    "type": "expense",
    "category": "인형뽑기",
    "amount": 7000,
    "memo": "여행/문화",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417259048,
    "date": "2025-10-04",
    "type": "expense",
    "category": "다영-스팸세트",
    "amount": 20000,
    "memo": "타인에게주는 용돈/선물",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417259049,
    "date": "2025-10-04",
    "type": "expense",
    "category": "김신와규-잡채고기,육회",
    "amount": 30000,
    "memo": "식재료",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417259050,
    "date": "2025-10-04",
    "type": "income",
    "category": "상생지원금",
    "amount": 30000,
    "memo": "국가지원금",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417259051,
    "date": "2025-10-04",
    "type": "expense",
    "category": "덕풍시장-추석-반찬",
    "amount": 11000,
    "memo": "타인에게주는 용돈/선물",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417259052,
    "date": "2025-10-04",
    "type": "income",
    "category": "추석-반찬-상생지원금",
    "amount": 11000,
    "memo": "국가지원금",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417259053,
    "date": "2025-10-04",
    "type": "expense",
    "category": "덕풍시장-두부,도토리묵",
    "amount": 5000,
    "memo": "타인에게주는 용돈/선물",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417259054,
    "date": "2025-10-04",
    "type": "income",
    "category": "두부,도토리묵-상상지원금",
    "amount": 5000,
    "memo": "국가지원금",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417259055,
    "date": "2025-10-04",
    "type": "expense",
    "category": "덕풍시장-수정분식",
    "amount": 12000,
    "memo": "식당/카페",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417259056,
    "date": "2025-10-04",
    "type": "income",
    "category": "수정분식-상생지원금",
    "amount": 12000,
    "memo": "국가지원금",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417259057,
    "date": "2025-10-04",
    "type": "expense",
    "category": "예술피자",
    "amount": 23200,
    "memo": "식당/카페",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417259058,
    "date": "2025-10-04",
    "type": "expense",
    "category": "쿠팡",
    "amount": 21450,
    "memo": "식재료",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417259059,
    "date": "2025-10-04",
    "type": "expense",
    "category": "당근-스팸",
    "amount": 38000,
    "memo": "식재료",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417259060,
    "date": "2025-10-05",
    "type": "expense",
    "category": "추석 경준효원현우 -5만씩",
    "amount": 150000,
    "memo": "타인에게주는 용돈/선물",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417259061,
    "date": "2025-10-05",
    "type": "expense",
    "category": "시엄니",
    "amount": 200000,
    "memo": "타인에게주는 용돈/선물",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417259062,
    "date": "2025-10-05",
    "type": "income",
    "category": "유성-애들용돈",
    "amount": 200000,
    "memo": "용돈",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417259063,
    "date": "2025-10-05",
    "type": "income",
    "category": "시엄니가주심",
    "amount": 300000,
    "memo": "용돈",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417259064,
    "date": "2025-10-05",
    "type": "expense",
    "category": "쿠팡-시엄니신발",
    "amount": 66000,
    "memo": "타인에게주는 용돈/선물",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417259065,
    "date": "2025-10-05",
    "type": "income",
    "category": "미라-애들용돈",
    "amount": 150000,
    "memo": "용돈",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417259066,
    "date": "2025-10-05",
    "type": "expense",
    "category": "가인이보험",
    "amount": 34160,
    "memo": "보험",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417259067,
    "date": "2025-10-05",
    "type": "expense",
    "category": "목동-전어",
    "amount": 53000,
    "memo": "배달",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417259068,
    "date": "2025-10-05",
    "type": "expense",
    "category": "목동-메가커피",
    "amount": 16000,
    "memo": "식당/카페",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417259069,
    "date": "2025-10-06",
    "type": "expense",
    "category": "추석 선우은우",
    "amount": 40000,
    "memo": "타인에게주는 용돈/선물",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417259070,
    "date": "2025-10-06",
    "type": "expense",
    "category": "추석 홍규지인",
    "amount": 100000,
    "memo": "타인에게주는 용돈/선물",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417259071,
    "date": "2025-10-06",
    "type": "income",
    "category": "추석 다영",
    "amount": 40000,
    "memo": "용돈",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417259072,
    "date": "2025-10-06",
    "type": "income",
    "category": "추석 오빠",
    "amount": 60000,
    "memo": "용돈",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417259073,
    "date": "2025-10-06",
    "type": "expense",
    "category": "추석 엄마아빠",
    "amount": 100000,
    "memo": "타인에게주는 용돈/선물",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417259074,
    "date": "2025-10-06",
    "type": "expense",
    "category": "당근-상학디스커버리점퍼",
    "amount": 50000,
    "memo": "옷",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417259075,
    "date": "2025-10-06",
    "type": "expense",
    "category": "추석 지혁가인",
    "amount": 60000,
    "memo": "지혁가인",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417259076,
    "date": "2025-10-06",
    "type": "expense",
    "category": "추석 가족-은성수산-전어",
    "amount": 38000,
    "memo": "식당/카페",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417259077,
    "date": "2025-10-07",
    "type": "expense",
    "category": "키위",
    "amount": 4000,
    "memo": "식재료",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417259079,
    "date": "2025-10-07",
    "type": "income",
    "category": "상생지원금",
    "amount": 4000,
    "memo": "국가지원금",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417259080,
    "date": "2025-10-07",
    "type": "expense",
    "category": "쿠팡 침대면패드",
    "amount": 20920,
    "memo": "생활용품",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417259081,
    "date": "2025-10-08",
    "type": "expense",
    "category": "테무-식기건조대",
    "amount": 13336,
    "memo": "생활용품",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417259082,
    "date": "2025-10-08",
    "type": "expense",
    "category": "씨유-삼각김밥",
    "amount": 6300,
    "memo": "식재료",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417259083,
    "date": "2025-10-08",
    "type": "income",
    "category": "상생지원금",
    "amount": 6300,
    "memo": "국가지원금",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417259084,
    "date": "2025-10-08",
    "type": "expense",
    "category": "당근-코렐접시2개",
    "amount": 15000,
    "memo": "개인쇼핑",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417259085,
    "date": "2025-10-08",
    "type": "expense",
    "category": "캠핑-사이트3박",
    "amount": 130000,
    "memo": "여행/문화",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417259086,
    "date": "2025-10-09",
    "type": "expense",
    "category": "상학핸드폰",
    "amount": 70000,
    "memo": "통신 렌탈 구독료",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417259087,
    "date": "2025-10-10",
    "type": "expense",
    "category": "영경쭌모임",
    "amount": 20000,
    "memo": "모임회비",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417259088,
    "date": "2025-10-10",
    "type": "expense",
    "category": "삼성생명보험",
    "amount": 54797,
    "memo": "보험",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417259089,
    "date": "2025-10-10",
    "type": "expense",
    "category": "다정폰요금 LGu+",
    "amount": 147990,
    "memo": "통신 렌탈 구독료",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417259090,
    "date": "2025-10-11",
    "type": "expense",
    "category": "감자탕",
    "amount": 52500,
    "memo": "식당/카페",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417259091,
    "date": "2025-10-11",
    "type": "expense",
    "category": "캠핑식재료",
    "amount": 314500,
    "memo": "여행/문화",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417259092,
    "date": "2025-10-12",
    "type": "expense",
    "category": "당근-가인자전거",
    "amount": 50000,
    "memo": "지혁가인",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417259093,
    "date": "2025-10-12",
    "type": "expense",
    "category": "당근-후드집업",
    "amount": 15000,
    "memo": "옷",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417259094,
    "date": "2025-10-12",
    "type": "expense",
    "category": "씨유-삼각김밥",
    "amount": 4400,
    "memo": "식재료",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417259095,
    "date": "2025-10-12",
    "type": "income",
    "category": "상생지원금",
    "amount": 4400,
    "memo": "국가지원금",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417259096,
    "date": "2025-10-12",
    "type": "expense",
    "category": "올스타마트",
    "amount": 18919,
    "memo": "식재료",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417259097,
    "date": "2025-10-12",
    "type": "expense",
    "category": "쿠팡-휴지,옷걸이",
    "amount": 26820,
    "memo": "생활용품",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417259098,
    "date": "2025-10-12",
    "type": "expense",
    "category": "다이소",
    "amount": 17500,
    "memo": "생활용품",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417259099,
    "date": "2025-10-13",
    "type": "expense",
    "category": "한마음문구",
    "amount": 11650,
    "memo": "지혁가인",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417259100,
    "date": "2025-10-13",
    "type": "expense",
    "category": "가인생일답례품 선우퍼즐",
    "amount": 4000,
    "memo": "타인에게주는 용돈/선물",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417259101,
    "date": "2025-10-13",
    "type": "income",
    "category": "상생지원금",
    "amount": 15650,
    "memo": "국가지원금",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417259102,
    "date": "2025-10-14",
    "type": "expense",
    "category": "지혁이영어",
    "amount": 190000,
    "memo": "학원/교재",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417259103,
    "date": "2025-10-14",
    "type": "expense",
    "category": "아이비과자",
    "amount": 3260,
    "memo": "식재료",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417259104,
    "date": "2025-10-14",
    "type": "income",
    "category": "당근-밤2키로",
    "amount": 10000,
    "memo": "부수입",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417259105,
    "date": "2025-10-14",
    "type": "expense",
    "category": "가인생일답례품 지혁키링",
    "amount": 6900,
    "memo": "지혁가인",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417259106,
    "date": "2025-10-14",
    "type": "expense",
    "category": "가인이생일선물팽귄",
    "amount": 26400,
    "memo": "지혁가인",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417259107,
    "date": "2025-10-14",
    "type": "expense",
    "category": "은성수산-전어",
    "amount": 35000,
    "memo": "식당/카페",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417259108,
    "date": "2025-10-14",
    "type": "expense",
    "category": "가인생일답례품 은우",
    "amount": 5000,
    "memo": "타인에게주는 용돈/선물",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417259109,
    "date": "2025-10-15",
    "type": "expense",
    "category": "식대쿠폰10장",
    "amount": 65000,
    "memo": "식당/카페",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417259110,
    "date": "2025-10-15",
    "type": "expense",
    "category": "주유",
    "amount": 55765,
    "memo": "교통",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417259111,
    "date": "2025-10-15",
    "type": "income",
    "category": "당근-어항조명",
    "amount": 15000,
    "memo": "부수입",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417259112,
    "date": "2025-10-15",
    "type": "expense",
    "category": "가인생일파티 만차이",
    "amount": 60000,
    "memo": "식당/카페",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417259113,
    "date": "2025-10-15",
    "type": "expense",
    "category": "아이패드 웹툰",
    "amount": 6000,
    "memo": "기타",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417259114,
    "date": "2025-10-16",
    "type": "expense",
    "category": "생일턱 족발예찬",
    "amount": 81000,
    "memo": "식당/카페",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417259115,
    "date": "2025-10-16",
    "type": "income",
    "category": "상생지원금",
    "amount": 81000,
    "memo": "국가지원금",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417259116,
    "date": "2025-10-16",
    "type": "expense",
    "category": "지혁폰요금",
    "amount": 4990,
    "memo": "통신 렌탈 구독료",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417259117,
    "date": "2025-10-16",
    "type": "expense",
    "category": "가인폰요금",
    "amount": 22000,
    "memo": "통신 렌탈 구독료",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417259118,
    "date": "2025-10-17",
    "type": "expense",
    "category": "가인 케데헌생일케이크",
    "amount": 27850,
    "memo": "지혁가인",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417259119,
    "date": "2025-10-17",
    "type": "expense",
    "category": "LGU+ 인터넷티비",
    "amount": 34100,
    "memo": "통신 렌탈 구독료",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417259120,
    "date": "2025-10-17",
    "type": "expense",
    "category": "제주감귤쥬스",
    "amount": 2537,
    "memo": "식재료",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417259121,
    "date": "2025-10-17",
    "type": "expense",
    "category": "가인생파 치킨",
    "amount": 25400,
    "memo": "지혁가인",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417259122,
    "date": "2025-10-17",
    "type": "expense",
    "category": "가인생파 피자",
    "amount": 20000,
    "memo": "지혁가인",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417259123,
    "date": "2025-10-17",
    "type": "expense",
    "category": "홍규생일 치킨쿠폰",
    "amount": 23000,
    "memo": "타인에게주는 용돈/선물",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417259124,
    "date": "2025-10-17",
    "type": "income",
    "category": "그리다 단기강의",
    "amount": 203070,
    "memo": "다정월급/민들레,미사초,단기강의",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417259125,
    "date": "2025-10-17",
    "type": "expense",
    "category": "은성수산-광어",
    "amount": 45000,
    "memo": "식당/카페",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417259126,
    "date": "2025-10-18",
    "type": "expense",
    "category": "대출이자",
    "amount": 1440571,
    "memo": "이자/수수료",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417259127,
    "date": "2025-10-18",
    "type": "expense",
    "category": "에버랜드.잭다니엘허니",
    "amount": 35000,
    "memo": "여행/문화",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417259128,
    "date": "2025-10-18",
    "type": "expense",
    "category": "에버랜드.도시락재료",
    "amount": 15000,
    "memo": "여행/문화",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417259129,
    "date": "2025-10-18",
    "type": "expense",
    "category": "에버랜드.도시락용기",
    "amount": 3000,
    "memo": "여행/문화",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417259130,
    "date": "2025-10-18",
    "type": "expense",
    "category": "해솔이.선물.",
    "amount": 2000,
    "memo": "타인에게주는 용돈/선물",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417259131,
    "date": "2025-10-18",
    "type": "income",
    "category": "엄마아빠 생일용돈",
    "amount": 100000,
    "memo": "부수입",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417259132,
    "date": "2025-10-18",
    "type": "expense",
    "category": "쿠팡 과자.음료",
    "amount": 17800,
    "memo": "식재료",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417259133,
    "date": "2025-10-18",
    "type": "expense",
    "category": "쿠팡 마스크",
    "amount": 6770,
    "memo": "생활용품",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417259134,
    "date": "2025-10-18",
    "type": "expense",
    "category": "목동전화기",
    "amount": 7700,
    "memo": "통신 렌탈 구독료",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417259135,
    "date": "2025-10-19",
    "type": "expense",
    "category": "에버랜드 구슬아이스크림",
    "amount": 4500,
    "memo": "여행/문화",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417259136,
    "date": "2025-10-19",
    "type": "expense",
    "category": "에버랜드 은우젤리",
    "amount": 6800,
    "memo": "여행/문화",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417259137,
    "date": "2025-10-19",
    "type": "expense",
    "category": "에버랜드비용",
    "amount": 100000,
    "memo": "여행/문화",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417259138,
    "date": "2025-10-20",
    "type": "expense",
    "category": "피자알볼로 2판",
    "amount": 36000,
    "memo": "식당/카페",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417259139,
    "date": "2025-10-20",
    "type": "expense",
    "category": "유미언니 전시축하 쿠폰",
    "amount": 16200,
    "memo": "타인에게주는 용돈/선물",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417259140,
    "date": "2025-10-20",
    "type": "expense",
    "category": "미미모 카페",
    "amount": 8400,
    "memo": "식당/카페",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417259141,
    "date": "2025-10-21",
    "type": "expense",
    "category": "가인 치과 실란트",
    "amount": 14769,
    "memo": "병원/약",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417259142,
    "date": "2025-10-21",
    "type": "income",
    "category": "내생일 다영",
    "amount": 50000,
    "memo": "부수입",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417259143,
    "date": "2025-10-21",
    "type": "expense",
    "category": "선우생일 건담",
    "amount": 25750,
    "memo": "타인에게주는 용돈/선물",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417259144,
    "date": "2025-10-21",
    "type": "expense",
    "category": "티머니충전",
    "amount": 50000,
    "memo": "교통",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417259145,
    "date": "2025-10-21",
    "type": "expense",
    "category": "쿠팡",
    "amount": 7890,
    "memo": "-",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417259146,
    "date": "2025-10-22",
    "type": "expense",
    "category": "목동인터넷tv",
    "amount": 38500,
    "memo": "통신 렌탈 구독료",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417259147,
    "date": "2025-10-22",
    "type": "income",
    "category": "민들레수업",
    "amount": 1350000,
    "memo": "다정월급/민들레,미사초,단기강의",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417259148,
    "date": "2025-10-22",
    "type": "expense",
    "category": "쿠팡 치약,의자발커버",
    "amount": 14000,
    "memo": "생활용품",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417259149,
    "date": "2025-10-22",
    "type": "expense",
    "category": "쿠팡 우유라면떡볶이 등",
    "amount": 38000,
    "memo": "식재료",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417259150,
    "date": "2025-10-22",
    "type": "expense",
    "category": "상하기종합보험",
    "amount": 70110,
    "memo": "보험",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417259151,
    "date": "2025-10-23",
    "type": "expense",
    "category": "지혁이 영양제",
    "amount": 26500,
    "memo": "지혁가인",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417259152,
    "date": "2025-10-23",
    "type": "expense",
    "category": "생강레몬차 2개",
    "amount": 11000,
    "memo": "식재료",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417259153,
    "date": "2025-10-23",
    "type": "expense",
    "category": "하나로마트",
    "amount": 30000,
    "memo": "식재료",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417259154,
    "date": "2025-10-23",
    "type": "expense",
    "category": "배달 해장국2",
    "amount": 26100,
    "memo": "식당/카페",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417259155,
    "date": "2025-10-24",
    "type": "expense",
    "category": "아파트관리비",
    "amount": 303460,
    "memo": "관리비",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417259156,
    "date": "2025-10-24",
    "type": "income",
    "category": "상하기급여",
    "amount": 5039670,
    "memo": "상학월급",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417259157,
    "date": "2025-10-24",
    "type": "expense",
    "category": "이레화방 스케치북 등",
    "amount": 55200,
    "memo": "개인쇼핑",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417259158,
    "date": "2025-10-24",
    "type": "expense",
    "category": "이케아 액자",
    "amount": 19000,
    "memo": "개인쇼핑",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417259159,
    "date": "2025-10-24",
    "type": "expense",
    "category": "이케아",
    "amount": 10000,
    "memo": "생활용품",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417259160,
    "date": "2025-10-24",
    "type": "expense",
    "category": "다이소",
    "amount": 14500,
    "memo": "생활용품",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417259161,
    "date": "2025-10-24",
    "type": "expense",
    "category": "밀크티탭",
    "amount": 84000,
    "memo": "학원/교재",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417259162,
    "date": "2025-10-25",
    "type": "expense",
    "category": "유씨적금",
    "amount": 100000,
    "memo": "예금/적금",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417259163,
    "date": "2025-10-25",
    "type": "expense",
    "category": "테무",
    "amount": 56436,
    "memo": "생활용품",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417259164,
    "date": "2025-10-25",
    "type": "expense",
    "category": "지혁 국어문제집",
    "amount": 10800,
    "memo": "학원/교재",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417259165,
    "date": "2025-10-25",
    "type": "expense",
    "category": "스티커라벨지2",
    "amount": 30000,
    "memo": "사업비",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417259166,
    "date": "2025-10-25",
    "type": "expense",
    "category": "발매트",
    "amount": 5570,
    "memo": "생활용품",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417259167,
    "date": "2025-10-25",
    "type": "expense",
    "category": "쿠키만들기2",
    "amount": 12410,
    "memo": "지혁가인",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417259168,
    "date": "2025-10-25",
    "type": "expense",
    "category": "물엿",
    "amount": 4480,
    "memo": "식재료",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417259169,
    "date": "2025-10-25",
    "type": "expense",
    "category": "핸드폰케이스2개",
    "amount": 15000,
    "memo": "생활용품",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417259170,
    "date": "2025-10-25",
    "type": "expense",
    "category": "버거킹",
    "amount": 8200,
    "memo": "식당/카페",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417259171,
    "date": "2025-10-25",
    "type": "expense",
    "category": "인형뽑기 다신안해",
    "amount": 8000,
    "memo": "기타",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417259172,
    "date": "2025-10-25",
    "type": "expense",
    "category": "코스트몰",
    "amount": 10329,
    "memo": "식재료",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417259173,
    "date": "2025-10-25",
    "type": "expense",
    "category": "폴콘블랙 빵",
    "amount": 16309,
    "memo": "식당/카페",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417259174,
    "date": "2025-10-25",
    "type": "expense",
    "category": "배달 낙곱새",
    "amount": 30900,
    "memo": "식당/카페",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417259175,
    "date": "2025-10-26",
    "type": "expense",
    "category": "가인반지2개",
    "amount": 4530,
    "memo": "지혁가인",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417259176,
    "date": "2025-10-26",
    "type": "expense",
    "category": "미사-떡볶이",
    "amount": 30000,
    "memo": "식당/카페",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417259177,
    "date": "2025-10-26",
    "type": "expense",
    "category": "지혁이-생일선물레고",
    "amount": 70000,
    "memo": "타인에게주는 용돈/선물",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417259178,
    "date": "2025-10-26",
    "type": "expense",
    "category": "쿠팡",
    "amount": 6900,
    "memo": "-",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417259179,
    "date": "2025-10-26",
    "type": "expense",
    "category": "쿠팡",
    "amount": 42720,
    "memo": "-",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417259180,
    "date": "2025-10-27",
    "type": "expense",
    "category": "미미모 음식",
    "amount": 36000,
    "memo": "식당/카페",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417259181,
    "date": "2025-10-27",
    "type": "expense",
    "category": "가인폰스트랩",
    "amount": 6000,
    "memo": "지혁가인",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417259182,
    "date": "2025-10-28",
    "type": "expense",
    "category": "코웨이침대2개",
    "amount": 46100,
    "memo": "통신 렌탈 구독료",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417259183,
    "date": "2025-10-28",
    "type": "expense",
    "category": "코웨이정수기",
    "amount": 27360,
    "memo": "통신 렌탈 구독료",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417259184,
    "date": "2025-10-28",
    "type": "expense",
    "category": "밀웜",
    "amount": 4270,
    "memo": "반려동물",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417259185,
    "date": "2025-10-28",
    "type": "expense",
    "category": "쿠팡이츠",
    "amount": 20500,
    "memo": "배달",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417259186,
    "date": "2025-10-28",
    "type": "expense",
    "category": "쿠팡",
    "amount": 69000,
    "memo": "-",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417259187,
    "date": "2025-10-29",
    "type": "expense",
    "category": "티머니충전",
    "amount": 50000,
    "memo": "교통",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417259188,
    "date": "2025-10-29",
    "type": "expense",
    "category": "kfc",
    "amount": 23700,
    "memo": "배달",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417259189,
    "date": "2025-10-29",
    "type": "expense",
    "category": "쿠팡이츠",
    "amount": 15000,
    "memo": "배달",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417259190,
    "date": "2025-10-30",
    "type": "expense",
    "category": "은성수산-전어",
    "amount": 35700,
    "memo": "식당/카페",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417259191,
    "date": "2025-10-30",
    "type": "expense",
    "category": "폰액정필름다정",
    "amount": 8400,
    "memo": "개인쇼핑",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417259192,
    "date": "2025-10-30",
    "type": "expense",
    "category": "쿠팡",
    "amount": 25000,
    "memo": "식재료",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417259193,
    "date": "2025-10-31",
    "type": "expense",
    "category": "식대쿠폰10장",
    "amount": 65000,
    "memo": "식당/카페",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417259194,
    "date": "2025-10-31",
    "type": "expense",
    "category": "가인방송댄스",
    "amount": 16989,
    "memo": "학원/교재",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417259195,
    "date": "2025-10-31",
    "type": "expense",
    "category": "지혁수영",
    "amount": 20400,
    "memo": "학원/교재",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417259196,
    "date": "2025-10-31",
    "type": "expense",
    "category": "하이패스",
    "amount": 44500,
    "memo": "교통",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417259197,
    "date": "2025-11-01",
    "type": "income",
    "category": "산호",
    "amount": 30000,
    "memo": "부수입",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417259198,
    "date": "2025-11-01",
    "type": "expense",
    "category": "쿠핑",
    "amount": 56000,
    "memo": "-",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417259199,
    "date": "2025-11-02",
    "type": "expense",
    "category": "빕스",
    "amount": 70000,
    "memo": "식당/카페",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417259200,
    "date": "2025-11-02",
    "type": "expense",
    "category": "뚜레쥬르 빵 샐러드",
    "amount": 25000,
    "memo": "식재료",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417259201,
    "date": "2025-11-02",
    "type": "expense",
    "category": "설라 약과김부각",
    "amount": 38000,
    "memo": "타인에게주는 용돈/선물",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417259202,
    "date": "2025-11-02",
    "type": "expense",
    "category": "과일",
    "amount": 18000,
    "memo": "식재료",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417259203,
    "date": "2025-11-02",
    "type": "expense",
    "category": "일리-커피",
    "amount": 71000,
    "memo": "식재료",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417259204,
    "date": "2025-11-03",
    "type": "expense",
    "category": "네이버 스티커라벨지",
    "amount": 47555,
    "memo": "사업비",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417259205,
    "date": "2025-11-03",
    "type": "expense",
    "category": "수민 상품권",
    "amount": 50000,
    "memo": "타인에게주는 용돈/선물",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417259206,
    "date": "2025-11-03",
    "type": "expense",
    "category": "트레이더스",
    "amount": 118760,
    "memo": "식재료",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417259207,
    "date": "2025-11-03",
    "type": "expense",
    "category": "쿠팡",
    "amount": 11040,
    "memo": "-",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417259208,
    "date": "2025-11-04",
    "type": "expense",
    "category": "지혁생일 돌삼닭",
    "amount": 97000,
    "memo": "식당/카페",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417259209,
    "date": "2025-11-04",
    "type": "income",
    "category": "상생지원금",
    "amount": 97000,
    "memo": "국가지원금",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417259210,
    "date": "2025-11-04",
    "type": "expense",
    "category": "쿠팡이츠",
    "amount": 18400,
    "memo": "배달",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417259211,
    "date": "2025-11-04",
    "type": "expense",
    "category": "쿠팡이츠",
    "amount": 20000,
    "memo": "배달",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417259212,
    "date": "2025-11-05",
    "type": "expense",
    "category": "삼성생명보험",
    "amount": 54797,
    "memo": "보험",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417259213,
    "date": "2025-11-05",
    "type": "expense",
    "category": "햇반",
    "amount": 49900,
    "memo": "식재료",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417259214,
    "date": "2025-11-05",
    "type": "expense",
    "category": "가인이보험",
    "amount": 34160,
    "memo": "보험",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417259215,
    "date": "2025-11-06",
    "type": "expense",
    "category": "소고기 국거리",
    "amount": 7300,
    "memo": "식재료",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417259216,
    "date": "2025-11-06",
    "type": "income",
    "category": "상생지원금",
    "amount": 7300,
    "memo": "국가지원금",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417259217,
    "date": "2025-11-06",
    "type": "expense",
    "category": "쿠팡",
    "amount": 10040,
    "memo": "-",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417259218,
    "date": "2025-11-07",
    "type": "expense",
    "category": "쿠우쿠우",
    "amount": 90958,
    "memo": "식당/카페",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417259219,
    "date": "2025-11-08",
    "type": "expense",
    "category": "은성수산-광어",
    "amount": 74000,
    "memo": "식당/카페",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417259220,
    "date": "2025-11-08",
    "type": "expense",
    "category": "콜라",
    "amount": 20690,
    "memo": "식재료",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417259221,
    "date": "2025-11-08",
    "type": "expense",
    "category": "산호프랙,비닐봉투",
    "amount": 46000,
    "memo": "생활용품",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417259222,
    "date": "2025-11-08",
    "type": "expense",
    "category": "이케아이마트다이소",
    "amount": 37000,
    "memo": "생활용품",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417259223,
    "date": "2025-11-09",
    "type": "expense",
    "category": "주유",
    "amount": 30000,
    "memo": "교통",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417259224,
    "date": "2025-11-09",
    "type": "expense",
    "category": "상학핸드폰",
    "amount": 70000,
    "memo": "통신 렌탈 구독료",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417259225,
    "date": "2025-11-09",
    "type": "expense",
    "category": "쿠팡이츠",
    "amount": 15880,
    "memo": "배달",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417259226,
    "date": "2025-11-09",
    "type": "expense",
    "category": "쿠팡이츠",
    "amount": 30900,
    "memo": "배달",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417259227,
    "date": "2025-11-12",
    "type": "expense",
    "category": "애들핸드폰비",
    "amount": 32400,
    "memo": "통신 렌탈 구독료",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417259228,
    "date": "2025-11-12",
    "type": "expense",
    "category": "일리-커피",
    "amount": 77885,
    "memo": "식재료",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417259229,
    "date": "2025-11-12",
    "type": "expense",
    "category": "led전구6개구매",
    "amount": 45000,
    "memo": "생활용품",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417259230,
    "date": "2025-11-12",
    "type": "expense",
    "category": "쿠팡이츠",
    "amount": 16900,
    "memo": "배달",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417259231,
    "date": "2025-11-13",
    "type": "expense",
    "category": "주유",
    "amount": 50000,
    "memo": "교통",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417259232,
    "date": "2025-11-13",
    "type": "expense",
    "category": "하나로마트",
    "amount": 56100,
    "memo": "식재료",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417259233,
    "date": "2025-11-13",
    "type": "expense",
    "category": "쿠팡이츠",
    "amount": 15000,
    "memo": "배달",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417259234,
    "date": "2025-11-14",
    "type": "expense",
    "category": "쿠팡이츠",
    "amount": 24000,
    "memo": "배달",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417259235,
    "date": "2025-11-15",
    "type": "expense",
    "category": "cgv 귀멸",
    "amount": 36000,
    "memo": "여행/문화",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417259236,
    "date": "2025-11-15",
    "type": "expense",
    "category": "팝콘",
    "amount": 11500,
    "memo": "식당/카페",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417259237,
    "date": "2025-11-15",
    "type": "expense",
    "category": "버커킹",
    "amount": 20400,
    "memo": "식당/카페",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417259238,
    "date": "2025-11-16",
    "type": "expense",
    "category": "꾸러기식당외1",
    "amount": 18500,
    "memo": "식당/카페",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417259239,
    "date": "2025-11-16",
    "type": "expense",
    "category": "쿠팡이츠",
    "amount": 17900,
    "memo": "배달",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417259240,
    "date": "2025-11-18",
    "type": "expense",
    "category": "대출이자",
    "amount": 1440571,
    "memo": "이자/수수료",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417259241,
    "date": "2025-11-18",
    "type": "expense",
    "category": "목동전화기",
    "amount": 7700,
    "memo": "통신 렌탈 구독료",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417259242,
    "date": "2025-11-19",
    "type": "expense",
    "category": "목동인터넷tv",
    "amount": 38500,
    "memo": "통신 렌탈 구독료",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417259243,
    "date": "2025-11-20",
    "type": "expense",
    "category": "은성수산-광어",
    "amount": 38000,
    "memo": "식당/카페",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417259244,
    "date": "2025-11-22",
    "type": "expense",
    "category": "상하기종합보험",
    "amount": 70110,
    "memo": "보험",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417259245,
    "date": "2025-11-22",
    "type": "expense",
    "category": "다이소",
    "amount": 29000,
    "memo": "생활용품",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417259246,
    "date": "2025-11-22",
    "type": "expense",
    "category": "이마트",
    "amount": 99670,
    "memo": "식재료",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417259247,
    "date": "2025-11-23",
    "type": "expense",
    "category": "하나로마트",
    "amount": 75310,
    "memo": "식재료",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417259248,
    "date": "2025-11-24",
    "type": "expense",
    "category": "효원생일기프트권",
    "amount": 30000,
    "memo": "타인에게주는 용돈/선물",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417259249,
    "date": "2025-11-25",
    "type": "expense",
    "category": "아파트관리비",
    "amount": 267740,
    "memo": "관리비",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417259250,
    "date": "2025-11-25",
    "type": "expense",
    "category": "유씨적금",
    "amount": 100000,
    "memo": "예금/적금",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417259251,
    "date": "2025-11-25",
    "type": "expense",
    "category": "닭장물품",
    "amount": 14000,
    "memo": "반려동물",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417259252,
    "date": "2025-11-25",
    "type": "income",
    "category": "급여",
    "amount": 1000000,
    "memo": "상학월급",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417259253,
    "date": "2025-11-25",
    "type": "income",
    "category": "상하기급여",
    "amount": 4041670,
    "memo": "상학월급",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417259254,
    "date": "2025-11-25",
    "type": "expense",
    "category": "김해이모알부민",
    "amount": 39800,
    "memo": "타인에게주는 용돈/선물",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417259255,
    "date": "2025-11-27",
    "type": "expense",
    "category": "주유",
    "amount": 56439,
    "memo": "교통",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417259256,
    "date": "2025-11-29",
    "type": "expense",
    "category": "알리-에어건",
    "amount": 46000,
    "memo": "생활용품",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417259257,
    "date": "2025-11-29",
    "type": "expense",
    "category": "아름다운가게",
    "amount": 10000,
    "memo": "생활용품",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417259258,
    "date": "2025-11-29",
    "type": "expense",
    "category": "이발-상학",
    "amount": 12000,
    "memo": "미용비",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417259259,
    "date": "2025-11-29",
    "type": "expense",
    "category": "버거킹",
    "amount": 11700,
    "memo": "식당/카페",
    "writer": "husband",
    "isFixed": false
  },
  {
    "id": 1767417259260,
    "date": "2025-11-29",
    "type": "expense",
    "category": "한마음문구",
    "amount": 16700,
    "memo": "생활용품",
    "writer": "husband",
    "isFixed": false
  }
];