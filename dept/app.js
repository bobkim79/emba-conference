/* ================= 데이터 ================= */
// 컨퍼런스 FAQ (원본 e-mba.io 질문 구성. 답변은 확정된 사실만 기재)
var EVENT_FAQ = [
 ["경희 EMBA 경영혁신·성장 컨퍼런스는 언제, 어디서 열리나요?","<p>2026년 12월 12일(토) 14:00, 경희대학교 경영대학원 오비스홀 111호에서 열립니다.</p>"],
 ["컨퍼런스는 어떻게 구성되나요?","<p>Part 1은 7개의 전문가 실무 강연(14:10~16:40), Part 2는 7개 팀이 발표하는 모의 IR 피칭데이입니다. 참관자는 모의투자에 참여합니다.</p>"],
 ["참관은 어떻게 신청하나요?","<p>온오프믹스에서 신청합니다. 문의는 bob@khu.ac.kr로 받습니다.</p>"],
 ["EMBA란 무엇인가요?","<p>Executive MBA의 약자로, 기업 경영자와 전문직 원우가 함께 배우고 교류하는 경영학 석사 과정입니다. 자세한 내용은 ‘학과 소개’ 탭을 보세요.</p>"],
 ["EMBA 재학생·동문만 신청할 수 있나요?","<p>아닙니다. EMBA 원우·동문뿐 아니라 경희대학교 구성원 중 창업을 준비하는 분 모두 신청할 수 있습니다. 참관은 가족도 함께하실 수 있습니다.</p>"],
 ["아직 사업 초기라 자료가 부족해도 되나요?","<p>완성본이 아니어도 지금 가진 자료로 괜찮습니다. 팀 소개와 PDF 또는 PPT 한 부를 보내 주세요.</p>"],
 ["실제 투자를 받을 수 있나요?","<p>이 자리는 실제 투자 유치가 목적이 아닌 모의고사형 피칭데이이며, 모의투자도 가상 투자금으로 진행합니다.</p>"],
 ["7팀이 넘으면 어떻게 되나요?","<p>마감 후 신청은 대기로 받고, 취소가 나오면 접수 순서대로 올라갑니다.</p>"],
 ["발표 자료는 언제까지 보내야 하나요?","<p>접수 마감일은 최종 확정 후 이 페이지와 별도 공지로 안내합니다. 신청 메일에 지금 가진 자료를 먼저 보내 주세요.</p>"]
];

// 신입생 FAQ 33개 (신입생 오리엔테이션 자료 기준). cat: 분류
var GUIDE_FAQ = [
 {c:"학과 소개",q:"어떤 과정인가요?",a:"<p>최고경영진과 관리자를 위한 경영학 석사(MBA) 학위과정입니다. 기업 조직의 리더, 창업가, 미래의 경영자, 가업 승계를 준비하는 예비 경영자가 대상입니다. 최첨단 경영지식과 인문학 소양을 함께 익히는 것이 목표입니다.</p><p>경영대학원은 1966년 산업경영대학원으로 출발해 2026년 60주년을 맞았으며, 책임경영·국제경영·창의경영을 핵심가치로 삼고 있습니다.</p>"},
 {c:"학과 소개",q:"이 프로그램의 특징은 무엇인가요?",a:"<ul><li>국내 유일 SME 특화: 중소·중견기업 대표, 실무 관리자, 2세 경영인이 현안과 해결방안을 함께 다룹니다.</li><li>경험과 네트워킹: 다양한 산업의 대표와 실무 의사결정자, 동문 선배와 정기적으로 만납니다.</li><li>디지털 혁신 대응: AI, IoT, 빅데이터, 플랫폼 비즈니스, CRM, SCM 등을 반영한 강의가 열립니다.</li><li>맞춤형 연구지원: 주임교수·책임교수가 학습을 돕고, 학술 연구 세미나와 경영 현안 특강이 매 학기 열립니다.</li></ul>"},
 {c:"수업·커리큘럼",q:"한 학기는 어떻게 구성되나요?",a:"<p>한 학기는 전반기 8회와 후반기 8회로 구성되며, 각각 2학점입니다. 신입생 수업연한은 4학기입니다.</p>"},
 {c:"수업·커리큘럼",q:"수업은 무슨 요일, 몇 시에 하나요?",a:"<p>오프라인 수업은 주로 토요일에 합니다.</p><ul><li>1교시 10:00 ~ 13:00 (3시간)</li><li>2교시 14:00 ~ 17:00 (3시간)</li></ul><p>온라인 수업도 병행되어 매주 캠퍼스에 나오지 않아도 되는 유연성이 있습니다.</p>"},
 {c:"수업·커리큘럼",q:"결석과 시험 규정은 어떻게 되나요?",a:"<p>3회 이상 결석하면 F학점입니다. 출장·경조사 같은 특별한 사정은 담당 교수님과 협의해 예외를 인정받을 수 있습니다.</p><p>중간고사와 기말고사가 있고, 과목에 따라 팀 프로젝트와 발표가 함께 진행됩니다. 강의계획서를 확인하세요.</p>"},
 {c:"수업·커리큘럼",q:"어떤 강의들이 있나요?",a:"<p>세부 전공 트랙 없이 기본, 심화, 융·복합 특화, AX(AI 전환) 특화 4단계로 구성됩니다. 전체 과목은 ‘학과 소개 → CURRICULUM’에서 볼 수 있습니다. 개설 과목은 학기별 운영에 따라 달라질 수 있습니다.</p>"},
 {c:"학사 시스템",q:"인포21과 e-Campus는 무엇인가요?",a:"<ul><li>인포21(info21.khu.ac.kr): 수강신청, 성적 조회, 등록금 고지서, 증명서 발급, 학적 관리. 모바일은 경희대학교 통합앱.</li><li>e-Campus(e-campus.khu.ac.kr): 온라인 강의, 강의자료, 과제 제출, 출석 체크. 모바일 앱 이름은 LearningX.</li></ul><p>인포21은 크롬에 최적화되어 있고 khu.ac.kr 팝업 허용이 필요합니다.</p>"},
 {c:"학사 시스템",q:"처음 로그인할 때 준비할 것이 있나요?",a:"<p>최초 사용자는 통합아이디 등록이 필요합니다. info21.khu.ac.kr 로그인 화면에서 ‘통합아이디 등록’을 누르고 이메일, 휴대폰, 공동인증서 중 하나로 본인인증을 합니다.</p><p>아이디는 기존 학번으로 만들 수 없으며 영문 대문자와 숫자 조합 4~15자입니다. 도서관과 LearningX 같은 연계 시스템은 통합ID 비밀번호를 씁니다.</p>"},
 {c:"학사 시스템",q:"2026학년도 2학기 주요 일정은 어떻게 되나요?",a:"<ul><li>수강신청: 8월 24일(월) 11:00 ~ 8월 28일(금) 17:00</li><li>개강: 9월 1일(화)</li><li>수강정정: 9월 1일(화) 11:00 ~ 9월 5일(월) 17:00</li><li>전반기: 9월 1일 ~ 10월 26일 (8주)</li><li>후반기: 10월 27일 ~ 12월 21일 (8주)</li></ul><p>정정기간이 지나면 후반기 수업을 포함해 정정·철회가 불가합니다.</p>"},
 {c:"학사 시스템",q:"수강신청은 어떻게 하나요?",a:"<p>인포21 수강신청 사이트(sugang.khu.ac.kr)에서 합니다. 우측 상단 로그인, 구분에서 대학원 수강신청 선택, 학번과 인포21 비밀번호로 로그인합니다.</p><ul><li>신청 한도: 매 학기 8학점(4과목)</li><li>신입생은 홈페이지 공지에서 학번을 조회하고 인포21 최초사용자 등록을 먼저 마쳐야 합니다.</li><li>신청 후 목록과 시간표를 반드시 최종 확인하세요.</li></ul><p>전산으로 신청하지 않고 출석부에 이름만 올려 들은 과목은 성적이 인정되지 않습니다.</p>"},
 {c:"학사 시스템",q:"수강신청 전에 확인할 것은 무엇인가요?",a:"<ul><li>과정구분: 일반석사는 일반석사 수업만 신청합니다. 국제반 표시 수업은 외국인 학생 대상입니다.</li><li>후반기 표시: 후반기 토요일 수업(10.27~12.21)은 전산상 금요일로 표시되며 특이사항란에 ‘후반기 토요일’로 적혀 있습니다.</li><li>영어강의: KEYSTONE 과정은 전체 학생이 수강할 수 있고 전공선택으로 인정됩니다.</li></ul>"},
 {c:"학사 시스템",q:"각종 신청서는 어디에 내나요?",a:"<p>경영대학원 홈페이지(khmba.khu.ac.kr) 학사안내의 학사서류접수시스템에서 온라인으로 접수합니다. 처리 상태는 처리중, 처리대기, 승인완료로 확인합니다.</p><p>휴학, 복학, 재입학, 자퇴, 논문대체과목, 등록금 환불 등 12종 서식을 신청할 수 있습니다. 연락처가 바뀌면 인포21 MY PAGE에서 직접 수정하세요. 교수님은 인포21에 등록된 연락처로 연락합니다.</p>"},
 {c:"졸업 요건",q:"졸업하려면 무엇을 이수해야 하나요?",a:"<p>2026학년도 2학기 이후 입학자 기준입니다.</p><ul><li>수업연한: 4학기 등록 완료</li><li>졸업이수학점: 총 30학점 이상</li><li>공통과목: 4과목 이상</li><li>논문학점: 논문 또는 논문대체과목</li><li>학위자격시험: 폐지</li></ul><p>이전 입학자(5학기, 36학점, 전공시험)와 기준이 다릅니다. 선배 기수 이야기와 혼동하지 마세요.</p>"},
 {c:"졸업 요건",q:"공통과목에는 어떤 과목이 있나요?",a:"<p>아래 과목 중 4과목 이상을 이수합니다.</p><ul><li>연구방법: 경영학연구, 경제학연구, 회계학연구, 연구조사방법론, 사례연구방법론</li><li>경영일반: 운영관리론, 재무제표분석, 마케팅관리론, 전략적인적자원관리, 조직행동론, 경영전략론, 글로벌협상론, 재무관리론, 소비자행동론, 경영정보시스템</li><li>신산업·전략: AI비즈니스개론, ESG경영론, 서비스경영론, 스타트업비즈니스, 에너지자원전략, 디자인씽킹, 엔터테인먼트산업론, 융복합산업가치론, 글로벌통상전략, 헬스케어론, 블록체인비즈니스, 자산관리전략, 지식재산권활용전략, 기업가정신, 생성형AI활용전략</li></ul>"},
 {c:"졸업 요건",q:"학위논문은 어떻게 하나요?",a:"<p>두 가지 중 하나를 선택합니다.</p><ul><li>논문: 논문심사 합격 후 논문 제출</li><li>논문대체과목: 3과목(6학점) 이수, 각 과목 B학점(80점) 이상</li></ul><p>논문심사비는 120,000원입니다. 심사용 논문 3부와 학위논문 제출승인서를 함께 제출하며, 지도교수를 포함한 심사교수 3인이 심사합니다. 완성본은 dcollection.khu.ac.kr로 제출합니다.</p>"},
 {c:"졸업 요건",q:"학점은 어떻게 인정되나요?",a:"<ul><li>출석: 총 강의시간의 3분의 2 이상</li><li>성적: C- 이상</li><li>재수강: F(66점) 이하만 가능, 재수강 시 B+까지 취득</li></ul><p>성적은 상대평가(A- 이상 70% 이내)이며, 수강인원 15명 미만 과목은 절대평가입니다. 수업연한 이후 학점을 취득할 때는 1과목이면 등록금 반액, 2과목 이상이면 전액을 냅니다.</p>"},
 {c:"졸업 요건",q:"휴학과 제적은 어떻게 되나요?",a:"<ul><li>휴학은 인포21에서 신청하며 한 학기 단위로 총 4학기(2년)를 넘을 수 없습니다. 승인 완료 처리가 되어야 휴학이 성립합니다.</li><li>특별휴학(해외파견, 전근, 출산, 병역)은 4학기 한도에 포함되지 않으며 증빙서류가 필요합니다.</li><li>학기 개시일로부터 22일 이후 휴학하면 등록금을 복학 시 등록금으로 대체할 수 없습니다.</li><li>복학은 학기 개시일로부터 21일 이내에 해야 합니다.</li></ul><p>미등록, 미복학은 제적 사유입니다. 어려운 사정이 있으면 휴학신청서나 자퇴원서를 미리 제출하세요.</p>"},
 {c:"학비·장학",q:"어떤 장학금이 있나요?",a:"<ul><li>성적장학 A/B: 직전학기 성적우수자(96점 이상 / 93점 이상), 운영위원회 결정</li><li>모범장학: 원우회장·사무총장, 수업료 전액</li><li>모범장학(임원): 원우회 부회장·사무국장 이하 임원과 전공별 대표 1명, 등록금 50%</li><li>경희동문장학: 본교·경희사이버대·경희호텔경영전문대 동문, 수업료 13%</li><li>경희가족장학: 경희대·경희학원·경희사이버대 2년 이상 재직 교직원, 등록금 전액(배우자·자녀 50%)</li><li>공무원장학: 현직 공무원 신분 입학자, 수업료 전액 또는 일부</li></ul><p>장학금 지급 시 입학금은 제외됩니다.</p>"},
 {c:"학비·장학",q:"등록금은 얼마인가요?",a:"<ul><li>등록금: 학기당 7,000,000원 (입학금 제외)</li><li>입학금: 1,000,000원 (신입생 최초 등록 시 1회)</li><li>4학기 합계: 28,000,000원</li><li>신입생 총 부담: 29,000,000원 (입학금 포함)</li></ul>"},
 {c:"학비·장학",q:"중도에 그만두면 등록금을 돌려받나요?",a:"<p>반환 사유가 발생한 날에 따라 달라집니다.</p><ul><li>학기 개시일 전일까지: 입학금과 등록금 전액</li><li>개시일 ~ 30일: 등록금의 6분의 5</li><li>31일 ~ 60일: 등록금의 3분의 2</li><li>61일 ~ 90일: 등록금의 2분의 1</li><li>90일 경과 후: 반환하지 않음</li></ul><p>학기 개시일 이후에는 입학금은 반환되지 않습니다.</p>"},
 {c:"학비·장학",q:"등록할 때 주의할 점이 있나요?",a:"<p>등록금 고지서는 인포21에서 확인하고 출력합니다. 전액 장학생도 등록 절차가 필요합니다. 납부할 금액이 없어도 기한 내에 등록이 완료되어야 하며, 그렇지 않으면 미등록으로 처리될 수 있습니다.</p>"},
 {c:"학비·장학",q:"등록금으로 연말정산 혜택을 받을 수 있나요?",a:"<ul><li>근로소득자 본인의 대학원 등록금은 교육비 세액공제 대상입니다. 한도 없이 전액 공제되며 공제율은 15%입니다.</li><li>배우자와 자녀의 대학원 학비는 해당되지 않습니다.</li><li>장학금으로 받은 금액, 학생회비, 교재비는 제외됩니다.</li><li>증빙은 연말정산 간소화 서비스 또는 교육비납입증명서로 합니다.</li></ul><p>개인별 소득에 따라 달라질 수 있으니 세무 담당자나 국세청 상담(126)으로 확인하세요.</p>"},
 {c:"학회·동문회·원우회",q:"EMBA 학회는 어떤 조직인가요?",a:"<p>EMBA 재학생을 대표하는 조직입니다. 학술 활동을 지원하고 학기별 전공행사를 주관하며 동문과 재학생을 잇는 가교 역할을 합니다.</p><p>입학 후 3학기가 되면 전통적으로 해당 기수에서 학회장이 선출됩니다. 3학기에 주관기수가 되면 기수회장은 학회장으로, 사무국장은 사무총장으로 자동 전환됩니다.</p>"},
 {c:"학회·동문회·원우회",q:"학회 임원은 어떻게 구성되나요?",a:"<ul><li>회장단: 기수회장(학회장), 부회장, 사무국장(사무총장)</li><li>실행 국장단: 재무국장, 학술국장, 골프국장(연간 골프 행사 4회 간사), 홍보국장</li><li>실무 국장단: 기획국장, 지원국장, 총무국장</li><li>자문: 고문</li></ul>"},
 {c:"학회·동문회·원우회",q:"학회의 주요 행사는 언제 열리나요?",a:"<p>신입생 입학식·OT(2월 말·8월 말), 신입생 환영회 및 개강연(3월 초·9월 초), 동문회 등산대회, 원장배 EMBA 골프대회(6월), 경영인의 밤(11월 말), 송년의 밤(12월 중) 등이 있습니다. 전체 달력은 ‘학과 소개 → ANNUAL EVENTS’를 보세요. 세부 일정은 학회 운영에 따라 변동될 수 있습니다.</p>"},
 {c:"학회·동문회·원우회",q:"동문회와 원우회는 어떻게 다른가요?",a:"<ul><li>EMBA 학회: EMBA 학과 단위 조직. 학술 활동 지원, 학기별 전공행사 주관, 동아리 활동.</li><li>원우회: 경영대학원 전체를 아우르는 통합 조직. 각 기수회장이 대의원(간사)으로 참여. khmbasa.khu.ac.kr</li><li>총동문회: 경영대학원 전체 동문 조직으로 1만 5천여 명. kyungheemba.com</li><li>EMBA 동문회: 총동문회와 별개로 EMBA 학과 자체의 동문회가 있어 졸업 후에도 기수 간 네트워킹이 이어집니다.</li></ul><p>한 줄로 정리하면 학회는 우리 학과, 원우회는 대학원 전체입니다.</p>"},
 {c:"학회·동문회·원우회",q:"함께 배우는 재학생은 어떤 분들인가요?",a:"<p>평균 연령은 44세입니다. 40대가 가장 많고 50대와 30대가 뒤를 잇습니다. 남성 비중이 높고 여성이 약 3분의 1입니다.</p><p>경기도와 서울이 대부분이며 인천, 충청, 강원, 경상, 전라, 제주까지 분포합니다. 학부 전공은 경영이 가장 많고 공학, 건축, 어학, 무역, 세무회계, 법학, 사회복지, 관광, 마케팅, 체육 등 다양합니다. (학과 홈페이지 공개 자료 기준 개략치)</p>"},
 {c:"캠퍼스 생활",q:"학생증과 증명서는 어떻게 발급받나요?",a:"<p>학생증은 제작에 약 2주가 걸립니다.</p><ul><li>비금융 학생증: 인포21 로그인 → 학생증 발급 바로가기 → 비금융 카드 신청. 경영대학원 행정실에서 받습니다.</li><li>금융 학생증: 하나은행 계좌 개설 후 신청. 청운관 1층 교내 하나은행에서 본인이 신분증을 가지고 방문해 받습니다.</li></ul><p>증명서는 청운관 1층 바로처리실 앞과 오비스홀 3층 열람실 앞 자동발급기, 또는 인터넷증명발급센터(kyunghee.certpia.com)에서 발급합니다. 문의: 제증명센터 02-961-9335~7</p>"},
 {c:"캠퍼스 생활",q:"무선랜과 도서관은 어떻게 이용하나요?",a:"<ul><li>무선랜: 정보지원처(ois.khu.ac.kr)에서 캠퍼스 무선랜 ID를 신청합니다.</li><li>도서관 대출: 재학생 30권 / 30일. 연체료는 1책당 1일 100원(최고 20,000원).</li><li>도서관 개관: 학기 중 평일 08:30 ~ 21:00, 토요일 09:00 ~ 17:00. 공휴일과 방학 중 토요일은 휴관.</li></ul><p>자세한 내용은 도서관 홈페이지(lib.khu.ac.kr)를 참고하세요.</p>"},
 {c:"캠퍼스 생활",q:"편의시설은 어디에 있나요?",a:"<ul><li>청운관 지하 1·2층: 학생식당, 문구점, 안경점, 서점, 우체국, ATM, 복사실</li><li>오비스홀 3층: 편의점, 카페, ATM, 증명서 발급기</li><li>오비스홀 3층 354호: 원우회실(복사, 인쇄)</li><li>오비스홀 1층: 보건소</li></ul>"},
 {c:"캠퍼스 생활",q:"주차 요금제는 어떻게 되나요?",a:"<p>학생증을 보여주면 일반요금이 적용됩니다. 반드시 정기권을 등록하거나 할인권을 미리 구매하세요.</p><ul><li>학기 정기권: 130,000원 / 학기</li><li>월 정기권: 30,000원 / 월</li><li>할인권: 1시간 2,000원, 6시간 4,000원 (1학기당 40~50매 한정, 본인만 사용)</li></ul><p>구입처: 푸른솔문화관 지하 2층 주차관리소 02-961-0181 (월·화·목 09:00~20:00, 수·금 09:00~18:00). 지참 서류: 재학증명서, 자동차등록증, 신분증 또는 학생증.</p>"},
 {c:"캠퍼스 생활",q:"어디에 주차하고 어떻게 나가나요?",a:"<ul><li>주차 가능: 오비스홀 지하주차장(강의실과 가장 가까움), 푸른솔문화관 지하주차장, 대운동장, 평화의 전당</li><li>주차 금지: 오비스홀, 이과대, 문과대 건물 앞 (견인될 수 있습니다)</li><li>토요일 출입문: 정문 24시간, 후문 06:00~21:00, 남문(푸른솔문화관) 24시간 무인</li></ul><p>늦게까지 머무를 때는 정문이나 남문(24시간)을 이용하세요.</p>"},
 {c:"문의처",q:"학과·학사 문의는 어디로 하나요?",a:"<p>경영대학원 행정실 (오비스홀 414호)</p><ul><li>대표·재학생 학사: 02-961-0127~8 (등록, 학적, 졸업요건, 증명, 각종 신청서)</li><li>신입생 상담: 02-961-2384~5 · 팩스 02-961-9604</li><li>이메일: khsb2200@khu.ac.kr · 홈페이지: khmba.khu.ac.kr</li><li>EMBA 학과장 강창동 교수: cdkang@khu.ac.kr (수강 지도, 전공 상담)</li><li>원우회: 02-961-0365</li></ul>"}
];

// 네트워크 DB: 공개된 행사 자료 기준. 새 인물은 이 배열에 한 줄씩 추가하세요.
// type: prof(교수) / member(재학생·동문 원우) / ext(외부 전문가) / staff(학회 임원)
var PEOPLE = [
 {n:"강창동",type:"prof",gen:"",org:"경희대학교 경영대학원 EMBA학과",role:"EMBA 학과장 · 교수",tags:"교수 학과장 수강지도 전공상담",note:"수강 지도, 전공 상담"},
 {n:"김경수",type:"staff",gen:"23기",org:"AI마케팅뉴스 대표",role:"EMBA 23기 학회장",tags:"학회장 임원 마케팅 AI 대표",talk:"컨퍼런스 연사 · AI 시대 기업들의 브랜드 홍보"},
 {n:"전다슬",type:"member",gen:"21기",org:"세무 전문가",role:"EMBA 21기 원우",tags:"세무 전문가",talk:"컨퍼런스 연사 · 세무담당자는 알고, 대표는 모르는 것들"},
 {n:"정석진",type:"member",gen:"23기",org:"SG솔루션 대표",role:"EMBA 23기 원우",tags:"대표 기업인증 중소기업",talk:"컨퍼런스 연사 · 기업인증이 중소기업들에 미치는 영향"},
 {n:"김학미",type:"member",gen:"23기",org:"SG솔루션 대표",role:"EMBA 23기 원우",tags:"대표 기업인증 중소기업",talk:"컨퍼런스 연사 · 기업인증이 중소기업들에 미치는 영향"},
 {n:"김의선",type:"member",gen:"23기",org:"제로에스 대표",role:"EMBA 23기 원우",tags:"대표 창업",talk:"컨퍼런스 연사 · 모두의 창업 경험담"},
 {n:"김승진",type:"member",gen:"24기",org:"인터엠 신사업기획팀",role:"EMBA 24기 원우",tags:"신사업 브랜드 기획",talk:"컨퍼런스 연사 · 나만의 아이디어를 브랜드로 만드는 방법"},
 {n:"손소희",type:"member",gen:"25기",org:"CJ ENM 출신 콘텐츠 PD",role:"EMBA 25기 원우",tags:"콘텐츠 PD AX 방송",talk:"컨퍼런스 연사 · 기업 AX전환 사례발표"},
 {n:"조성철",type:"ext",gen:"",org:"호남벤처스 이사",role:"엑셀러레이터",tags:"엑셀러레이터 지원사업 투자 벤처",talk:"컨퍼런스 연사 · 엑셀러레이터가 알려주는 대한민국 지원사업의 모든 것"}
];
var TYPE_LABEL = {prof:"교수",staff:"학회 임원",member:"재학생·동문",ext:"외부 전문가"};

// EMBA 원우 명단 (공개 항목만: 기수 · 이름 · EMBA 직책). 출처: EMBA 학생 명단 구글시트, 2026.11.14 반영
// 회사명·직책·홈페이지·이메일·연락처는 이 파일에 넣지 않는다 (로그인 서버에서만 제공)
// 형식: "기수:이름/직책,이름,..."
/* 원우 명단은 구글시트(원본 하나)에서 Apps Script를 거쳐 불러온다.
   공개: 기수 · 이름 · EMBA 직책 · 카테고리 (+ 1기~20기는 회사명)
   로그인: 회사명 · 직책 · 회사소개 · 홈페이지 · 이메일 */
var MEMBERS=[],GENS=[],MEMBERS_STATE='loading';

/* ================= 유틸 ================= */
function $(s,r){return (r||document).querySelector(s)}
function $$(s,r){return Array.prototype.slice.call((r||document).querySelectorAll(s))}
function esc(s){return String(s).replace(/[&<>"]/g,function(c){return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]})}
var toastT;
function toast(m){var t=$('#toast');t.textContent=m;t.classList.add('on');clearTimeout(toastT);toastT=setTimeout(function(){t.classList.remove('on')},1800)}
function copy(txt){
  if(navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText(txt).then(function(){toast('복사했습니다')},function(){toast('복사하지 못했습니다')})}
  else{var ta=document.createElement('textarea');ta.value=txt;document.body.appendChild(ta);ta.select();try{document.execCommand('copy');toast('복사했습니다')}catch(e){toast('복사하지 못했습니다')}document.body.removeChild(ta)}
}
document.addEventListener('click',function(e){
  var b=e.target.closest('[data-copy],[data-copy-el]');if(!b)return;
  copy(b.dataset.copy||$('#'+b.dataset.copyEl).textContent);
});

/* ================= 컨퍼런스 카운트다운 · 확정 현황 ================= */
// 현황 수정: 참관 확정 인원은 CONF.vis, 피칭 확정 팀은 IRTEAMS에 한 줄 추가하면 자동 반영
var CONF={vis:79,visMax:100,irMax:7,start:new Date(2026,11,12,14,0,0)};
var IRTEAMS=[
 {team:"NEXT50",name:"김동언",desc:"NEXT50은 50대의 경력과 생활 조건을 AI로 분석해 3가지 미래 역할과 90일 실행계획을 제안하는 세컨드 커리어 전환 서비스"},
 {team:"Railess",name:"김윤석",desc:"Railess는 모의 IR 피칭데이에 두 번째로 확정된 팀입니다. 사업 소개는 발표 자료가 확정되면 업데이트합니다."}
];
function two(n){return (n<10?'0':'')+n}
function tickCd(){
  var ms=CONF.start-new Date(),box=$('#cd');if(!box)return;
  if(ms<=0){ms=0;box.classList.add('end');box.querySelector('.cd-t em').textContent='컨퍼런스가 시작되었습니다'}
  var s=Math.floor(ms/1000);
  $('#cdD').textContent=two(Math.floor(s/86400));$('#cdH').textContent=two(Math.floor(s%86400/3600));
  $('#cdM').textContent=two(Math.floor(s%3600/60));$('#cdS').textContent=two(s%60);
}
tickCd();setInterval(tickCd,1000);
function renderConfStats(){
  var n=IRTEAMS.length;
  $('#stIR').textContent=n+'/'+CONF.irMax+'팀';$('#stIRn').textContent=n;
  $('#stVis').textContent=CONF.vis+'/'+CONF.visMax+'명';
  setTimeout(function(){$('#stIRb').style.width=(n/CONF.irMax*100)+'%';$('#stVisb').style.width=(CONF.vis/CONF.visMax*100)+'%'},300);
  $('#irCnt').textContent=n+' / '+CONF.irMax+'팀';
  var EM='<svg viewBox="0 0 100 100" aria-hidden="true"><circle cx="50" cy="34" r="19" fill="#1a0507"/><path d="M12 96c2-24 17-36 38-36s36 12 38 36z" fill="#1a0507"/></svg>';
  var h='';
  for(var i=0;i<CONF.irMax;i++){
    var x=IRTEAMS[i],no=two(i+1);
    h+=x?'<div class="ir ok" tabindex="0"><span class="no">'+no+'</span><span class="badge">확정</span><div class="tn">'+esc(x.team)+'</div><div class="pn">'+esc(x.name)+'</div><div class="hint">소개 보기</div><div class="dt"><b>'+esc(x.team)+' · '+esc(x.name)+'</b><p>'+esc(x.desc)+'</p></div></div>'
      :'<div class="ir em"><span class="no">'+no+'</span>'+EM+'<div class="tx">모집중</div></div>';
  }
  $('#irs').innerHTML=h;
  $$('#irs .ir.ok').forEach(function(el){el.addEventListener('click',function(){var w=el.classList.contains('open');$$('#irs .ir.open').forEach(function(o){o.classList.remove('open')});if(!w)el.classList.add('open')})});
}
renderConfStats();
/* ================= D-day ================= */
var now=new Date();now.setHours(0,0,0,0);
var dd=Math.round((new Date(2026,11,12)-now)/86400000);
var DDAY=dd>0?'D-'+dd:(dd===0?'D-DAY':'종료');

/* ================= 오른쪽 카드(페이지별) ================= */
var ASIDE={
 event:'<div class="info"><div class="st"><span class="pill">모집중</span><span>행사까지 <b>'+DDAY+'</b></span></div><h2>2026 경영혁신·성장 컨퍼런스</h2><dl><div><dt>일시</dt><dd>2026.12.12 (토) 14:00</dd></div><div><dt>장소</dt><dd class="s">경희대 경영대학원 오비스홀 111호</dd></div><div><dt>Part 1</dt><dd class="s">전문가 강연 7개 (14:10~16:40)</dd></div><div><dt>Part 2 모집</dt><dd class="s">모의 IR 7팀 선착순 · 발표 7분<br>+ 질의응답 3분</dd></div><div><dt>접수</dt><dd class="s">bob@khu.ac.kr</dd></div></dl><button class="btn-w" data-go="e-apply">IR 피칭 신청 방법</button></div><a class="btn-o" href="https://onoffmix.com/event/352720" target="_blank" rel="noopener">참관 신청하기</a>',
 guide:'<div class="info"><div class="st"><span class="pill">신입생</span><span>2026 2학기 이후</span></div><h2>한눈에 보기</h2><dl><div><dt>수업연한</dt><dd>4학기</dd></div><div><dt>졸업이수학점</dt><dd>30학점</dd></div><div><dt>수업</dt><dd class="s">토요일 1교시 10:00 · 2교시 14:00</dd></div><div><dt>등록금</dt><dd>700만원 / 학기</dd></div><div><dt>입학금</dt><dd class="s">100만원 (최초 1회)</dd></div></dl><button class="btn-w" data-go="g-faq">질문 검색하기</button></div><a class="btn-o" href="tel:029612384">신입생 상담 전화</a>',
 about:'<div class="info"><div class="st"><span class="pill">EMBA</span><span>SINCE 1966</span></div><h2>경희 EMBA학과</h2><dl><div><dt>소속</dt><dd class="s">경희대학교 경영대학원</dd></div><div><dt>방향</dt><dd class="s">함께 배우고, 도전하고, 성장의 길을 연결하다</dd></div><div><dt>학과장</dt><dd>강창동 교수</dd></div><div><dt>행정실</dt><dd class="s">오비스홀 414호 · 02-961-2384~5</dd></div></dl><button class="btn-w" data-go="a-curri">커리큘럼 보기</button></div><a class="btn-o" href="#/guide">신입생 안내 보기</a>',
 network:'<div class="info"><div class="st"><span class="pill">DB</span><span>교수·동문·재학생</span></div><h2>EMBA 네트워크</h2><dl><div><dt>등록 원우</dt><dd id="cnt2">0명</dd></div><div><dt>동문회</dt><dd class="s">EMBA 350여 명</dd></div><div><dt>총동문회</dt><dd class="s">경영대학원 1만 5천여 명</dd></div><div><dt>등록 요청</dt><dd class="s">bob@khu.ac.kr</dd></div></dl><button class="btn-w" data-go="n-join">등록 방법 보기</button></div><a class="btn-o" href="mailto:bob@khu.ac.kr?subject=%5BEMBA%20%EB%84%A4%ED%8A%B8%EC%9B%8C%ED%81%AC%5D%20%EB%93%B1%EB%A1%9D%20%EC%9A%94%EC%B2%AD">등록 요청하기</a>'
};

/* ================= 라우터 ================= */
var VIEWS=['event','guide','about','network'],cur='event',io;
var TABMETA={
 event:['경희대학교 경영대학원 EMBA학과 공식 안내: 2026 경영혁신·성장 컨퍼런스(12월 12일), 신입생 가이드, 학과 소개, 교수·동문·재학생 네트워크.','경희 EMBA | 경희대학교 경영대학원 EMBA학과'],
 guide:['경희 EMBA 신입생 가이드: 4학기 30학점, 토요일 수업, 등록금·입학금, 수업 방식, 졸업 요건과 자주 묻는 질문.','경희 EMBA 신입생 가이드'],
 about:['1966년 개설된 경희대학교 경영대학원 EMBA학과 소개: 교수진, 특징, AX 특화 커리큘럼 4단계, 갤러리, 학회 조직, 연간 행사.','경희 EMBA 학과 소개 | 교수진·커리큘럼'],
 network:['경희 EMBA 네트워크: 교수·동문·재학생 원우 데이터베이스, EMBA LETTER(보도·행사소식), 경조사.','경희 EMBA 네트워크 | 원우 DB·EMBA LETTER']
};
function route(){
  var h=location.hash?location.hash.replace('#/',''):(location.pathname.replace(/^\//,'').split('/')[0]||'event');
  if(VIEWS.indexOf(h)<0)h='event';
  cur=h;
  VIEWS.forEach(function(v){$('#v-'+v).classList.toggle('on',v===h)});
  $$('#tabs a').forEach(function(a){a.classList.toggle('on',a.dataset.v===h)});
  document.title=$('#v-'+h).dataset.title;
  var M=TABMETA[h]||TABMETA.event,cu=SITE+(h==='event'?'':h);
  function sm(q,k,v){var e=document.querySelector(q);if(e)e.setAttribute(k,v)}
  sm('link[rel=canonical]','href',cu);sm('meta[name=description]','content',M[0]);
  sm('meta[property="og:url"]','content',cu);sm('meta[property="og:title"]','content',M[1]);sm('meta[property="og:description"]','content',M[0]);
  $('#aside').innerHTML=ASIDE[h];
  if(h==='network')updateCount();
  buildSide();
  syncHero();
  window.scrollTo(0,0);
}
function buildSide(){
  var side=$('#side');side.innerHTML='';
  if(io)io.disconnect();
  var secs=$$('#v-'+cur+' section[data-nav]');
  secs.forEach(function(s){var a=document.createElement('a');a.textContent=s.dataset.nav;a.dataset.t=s.id;a.addEventListener('click',function(){go(s.id)});side.appendChild(a)});
  if(!('IntersectionObserver' in window))return;
  io=new IntersectionObserver(function(es){es.forEach(function(en){if(!en.isIntersecting)return;$$('#side a').forEach(function(l){l.classList.toggle('on',l.dataset.t===en.target.id)})})},{rootMargin:'-25% 0px -65% 0px'});
  secs.forEach(function(s){io.observe(s)});
}
function go(id){var el=document.getElementById(id);if(el)el.scrollIntoView({behavior:'smooth',block:'start'})}
document.addEventListener('click',function(e){var b=e.target.closest('[data-go]');if(b)go(b.dataset.go)});
window.addEventListener('hashchange',route);

/* ================= 렌더: FAQ ================= */
(function(){
  $('#eventFaq').innerHTML=EVENT_FAQ.map(function(f,i){return '<details'+(i===0?' open':'')+'><summary>'+esc(f[0])+'</summary><div class="ans">'+f[1]+'</div></details>'}).join('');
})();
var gcat='전체',gq='';
function hl(t,q){if(!q)return esc(t);var i=t.toLowerCase().indexOf(q.toLowerCase());if(i<0)return esc(t);return esc(t.slice(0,i))+'<mark>'+esc(t.slice(i,i+q.length))+'</mark>'+esc(t.slice(i+q.length))}
function renderGuide(){
  var cats=['전체'];GUIDE_FAQ.forEach(function(f){if(cats.indexOf(f.c)<0)cats.push(f.c)});
  $('#chips').innerHTML=cats.map(function(c){var n=c==='전체'?GUIDE_FAQ.length:GUIDE_FAQ.filter(function(f){return f.c===c}).length;return '<button class="chip'+(c===gcat?' on':'')+'" data-c="'+esc(c)+'">'+esc(c)+'<small>'+n+'</small></button>'}).join('');
  var q=gq.trim().toLowerCase();
  var list=GUIDE_FAQ.filter(function(f){
    if(gcat!=='전체'&&f.c!==gcat)return false;
    if(!q)return true;
    return (f.q+' '+f.c+' '+f.a.replace(/<[^>]+>/g,' ')).toLowerCase().indexOf(q)>=0;
  });
  $('#guideFaq').innerHTML=list.length?list.map(function(f){return '<details'+(q&&list.length<=3?' open':'')+'><summary>'+hl(f.q,gq.trim())+'<span class="cat">'+esc(f.c)+'</span></summary><div class="ans">'+f.a+'</div></details>'}).join(''):'<div class="empty">검색 결과가 없습니다. 다른 단어로 찾아보시거나 행정실(02-961-2384~5)로 문의해 주세요.</div>';
}
$('#chips').addEventListener('click',function(e){var b=e.target.closest('.chip');if(!b)return;gcat=b.dataset.c;renderGuide()});
$('#q').addEventListener('input',function(){gq=this.value;renderGuide()});
renderGuide();

/* ================= 렌더: 네트워크 ================= */
var ncat='all';
function updateCount(){var t=MEMBERS.length+'명';$('#cnt').textContent=t;$('#gcnt').textContent=maxGen()+'기';var c2=$('#cnt2');if(c2)c2.textContent=t}
/* ================= 원우 이메일 인증 =================
   api: Apps Script 웹 앱 주소 (…/exec)
   흐름: 명단에 등록된 이메일 입력 → 그 이메일로 온 6자리 인증번호 입력 → 6시간 동안 비공개 정보 표시
   세션 키는 이 탭(sessionStorage)에만 두고, 창을 닫거나 페이지를 떠나면 로그아웃한다. */
var AUTH={
  api:'https://script.google.com/macros/s/AKfycbzpy6zsDu75rY2ZqlUvMX9I2NDML0OWYTS59Lzd0Utpn73Lejrw_L11hZAX0fJ7cq5M/exec'
};
var PRIV=null,USER='',SES='',OTP_EMAIL='';
function ssGet(k){try{return sessionStorage.getItem(k)||''}catch(e){return ''}}
function ssSet(k,v){try{v?sessionStorage.setItem(k,v):sessionStorage.removeItem(k)}catch(e){}}
function api(body){
  return fetch(AUTH.api,{method:'POST',headers:{'Content-Type':'text/plain;charset=utf-8'},body:JSON.stringify(body)}).then(function(r){return r.json()});
}
var LOCK='<td class="lk">●●●</td>';
var LOCK_CO='<td class="lk" title="재학생 회사명은 인증 후 공개">●●●</td>';
function webHref(w){w=w.replace(/\[추정\]/g,'').trim();if(!w)return '';return /^https?:\/\//i.test(w)?w:'http://'+w}
// 한 사람 = 1줄: 기수 · EMBA 직책 · 이름 · 카테고리 · 회사명 · 직책 · 회사소개 · 홈페이지 · 이메일
function memberRows(m){
  var p=PRIV&&PRIV[m.i],co,rest;
  if(m.x){co='<td></td>';rest='<td></td><td></td><td></td><td></td>'}
  else if(p){
    var h=webHref(p.web||'');
    co='<td class="co">'+esc(p.co||'')+'</td>';
    rest='<td>'+esc(p.job||'')+'</td><td class="ds">'+esc(p.desc||'')+'</td><td>'+(h?'<a href="'+esc(h)+'" target="_blank" rel="noopener">'+esc(p.web.replace(/^https?:\/\//,''))+'</a>':'')+'</td><td>'+(p.email?'<a href="mailto:'+esc(p.email)+'">'+esc(p.email)+'</a>':'')+'</td>';
  }else{
    co=('co' in m)?'<td class="co">'+esc(m.co)+'</td>':LOCK_CO;
    rest=LOCK+LOCK+LOCK+LOCK;
  }
  return '<tr><td class="g">'+esc(m.g)+'</td><td class="rr">'+(m.r?'<span class="rl">'+esc(m.r)+'</span>':'')+'</td><td class="n">'+esc(m.n)+'</td><td>'+(m.cat?'<span class="ct">'+esc(m.cat)+'</span>':'')+'</td>'+co+rest+'</tr>';
}
function setLockbar(){
  var on=!!PRIV;
  $('#lockMsg').innerHTML=on?'✅ <b>'+esc(USER)+'</b> 으로 인증했습니다. 원우 정보는 학회 내부용으로만 써 주세요. (창을 닫으면 자동 로그아웃됩니다)':'🔒 직책 · 회사소개 · 홈페이지 · 이메일과 재학생(21기~) 회사명은 <b>명단에 등록된 이메일로 인증한 원우에게만</b> 보입니다.';
  $('#loginBtn').textContent=on?'로그아웃':'이메일 인증하고 보기';
  $$('.mtable thead th.pv').forEach(function(th){th.classList.toggle('lk',!on)});
}
function openLogin(html){
  $('#lmBody').innerHTML=html;
  $('#loginModal').classList.add('on');
  var f=$('#lmBody input');if(f)setTimeout(function(){f.focus()},50);
}
function stepEmail(msg){
  openLogin((msg?'<p class="lmsg">'+msg+'</p>':'')+'<p>원우 명단에 등록된 이메일을 입력해 주세요. 그 이메일로 6자리 인증번호를 보내드립니다.</p>'+
   '<form class="lf" id="fEmail"><input type="email" id="otpEmail" required autocomplete="email" placeholder="example@naver.com" value="'+esc(OTP_EMAIL)+'"><button class="btn-lg" type="submit">인증번호 받기</button></form>'+
   '<p class="lhint">명단 이메일이 바뀌었거나 기억나지 않으면 bob@khu.ac.kr로 문의해 주세요.</p>');
}
function stepCode(msg){
  openLogin((msg?'<p class="lmsg">'+msg+'</p>':'')+'<p><b>'+esc(OTP_EMAIL)+'</b> 이 명단에 등록된 이메일이면 인증번호가 발송됩니다. 메일함(스팸함 포함)을 확인해 주세요. 10분 동안 유효합니다.</p>'+
   '<form class="lf" id="fCode"><input id="otpCode" inputmode="numeric" pattern="[0-9]{6}" maxlength="6" required autocomplete="one-time-code" placeholder="인증번호 6자리"><button class="btn-lg" type="submit">확인</button></form>'+
   '<p class="lhint"><a href="#" id="otpBack">이메일 다시 입력</a> · <a href="#" id="otpResend">인증번호 다시 받기</a></p>');
}
function busy(form,on){$$('button,input',form).forEach(function(x){x.disabled=on})}
function applyPriv(d,email){
  PRIV=d.members;USER=email;
  PROF_PHONE={};(d.profs||[]).forEach(function(p){PROF_PHONE[p.n]=p.phone});renderProfs();
  setLockbar();renderMembers();
}
function sendCode(form){
  if(form)busy(form,true);
  api({action:'send',email:OTP_EMAIL}).then(function(d){
    if(d.ok)return stepCode();
    if(d.error==='too_soon')return stepCode('인증번호를 방금 보냈습니다. 1분 뒤에 다시 받을 수 있습니다.');
    if(d.error==='too_many')return stepEmail('오늘 인증번호 요청 한도를 넘었습니다. 내일 다시 시도하거나 bob@khu.ac.kr로 문의해 주세요.');
    if(d.error==='bad_email')return stepEmail('이메일 주소 형식을 확인해 주세요.');
    stepEmail('인증번호를 보내지 못했습니다. 잠시 후 다시 시도해 주세요.');
  }).catch(function(){stepEmail('서버에 연결하지 못했습니다. 잠시 후 다시 시도해 주세요.')});
}
$('#lmBody').addEventListener('submit',function(e){
  e.preventDefault();var f=e.target;
  if(f.id==='fEmail'){OTP_EMAIL=$('#otpEmail').value.trim().toLowerCase();if(OTP_EMAIL)sendCode(f);return}
  if(f.id==='fCode'){
    var code=$('#otpCode').value.trim();busy(f,true);
    api({action:'verify',email:OTP_EMAIL,code:code}).then(function(d){
      if(d.ok){
        SES=d.token;ssSet('emba_ses',SES);
        $('#loginModal').classList.remove('on');applyPriv(d,d.email);toast('인증했습니다');return;
      }
      if(d.error==='wrong_code')return stepCode('인증번호가 맞지 않습니다. (남은 횟수 '+d.left+'번)');
      if(d.error==='locked')return stepEmail('입력 횟수를 넘었습니다. 인증번호를 다시 받아 주세요.');
      if(d.error==='expired')return stepEmail('인증번호가 만료됐거나 발송되지 않았습니다. 명단에 등록된 이메일인지 확인하고 다시 받아 주세요.');
      stepCode('확인하지 못했습니다. 잠시 후 다시 시도해 주세요.');
    }).catch(function(){stepCode('서버에 연결하지 못했습니다. 잠시 후 다시 시도해 주세요.')});
  }
});
$('#lmBody').addEventListener('click',function(e){
  if(e.target.id==='otpBack'){e.preventDefault();stepEmail()}
  if(e.target.id==='otpResend'){e.preventDefault();sendCode()}
});
function logout(){
  if(SES)api({action:'logout',token:SES}).catch(function(){});
  SES='';ssSet('emba_ses','');
  PRIV=null;USER='';PROF_PHONE=null;renderProfs();
  setLockbar();renderMembers();toast('로그아웃했습니다');
}
/* 창·탭을 닫거나 새로고침/이동하면 자동 로그아웃: 세션 키를 지우고 서버 세션도 폐기한다.
   (페이지를 떠나는 순간 sendBeacon으로 logout을 보낸다. 새로고침하면 다시 인증해야 한다.) */
function leaveLogout(){
  var t=SES||ssGet('emba_ses');if(!t)return;
  ssSet('emba_ses','');SES='';
  try{navigator.sendBeacon(AUTH.api,new Blob([JSON.stringify({action:'logout',token:t})],{type:'text/plain;charset=utf-8'}))}catch(e){}
}
window.addEventListener('pagehide',leaveLogout);
// 같은 탭에서 세션이 남아 있으면 다시 불러오기 (뒤로가기 복원 등 예외 상황용)
function restoreSession(){
  var t=ssGet('emba_ses');if(!t||!AUTH.api)return;
  api({action:'data',token:t}).then(function(d){
    if(d.ok){SES=t;applyPriv(d,d.email)}else ssSet('emba_ses','');
  }).catch(function(){});
}
function renderMembers(){
  if(MEMBERS_STATE!=='ok'){
    $('#nchips').innerHTML='';
    $('#mbody').innerHTML='<tr><td colspan="9" class="empty">'+(MEMBERS_STATE==='loading'?'원우 명단을 불러오고 있습니다…':'원우 명단을 불러오지 못했습니다. 잠시 후 새로고침해 주세요.')+'</td></tr>';
    return;
  }
  var roleN=MEMBERS.filter(isBoard).length,secN=MEMBERS.filter(isSec).length;
  $('#nchips').innerHTML=[['all','전체',MEMBERS.length],['role','회장단',roleN],['sec','사무총장',secN]].map(function(x){return '<button class="chip'+(ncat===x[0]?' on':'')+'" data-t="'+x[0]+'">'+x[1]+'<small>'+x[2]+'</small></button>'}).join('');
  var q=$('#nq').value.trim().toLowerCase(),g=$('#ngen').value,html='';
  var list=MEMBERS.filter(function(m){
    if(ncat==='role'&&!isBoard(m))return false;
    if(ncat==='sec'&&!isSec(m))return false;
    if(g&&m.g!==g)return false;
    if(!q)return true;
    var p=PRIV&&PRIV[m.i]||{};
    return [m.g,m.n,m.r,m.cat,m.co,p.co,p.job,p.desc].join(' ').toLowerCase().indexOf(q)>=0;
  });
  if(ncat==='sec')list=list.slice().sort(function(a,b){return roleNo(b)-roleNo(a)});
  list.forEach(function(m){html+=memberRows(m)});
  $('#mbody').innerHTML=html||'<tr><td colspan="9" class="empty">조건에 맞는 원우가 없습니다.</td></tr>';
}
$('#nchips').addEventListener('click',function(e){var b=e.target.closest('.chip');if(!b)return;ncat=b.dataset.t;renderMembers()});
$('#nq').addEventListener('input',renderMembers);
$('#ngen').addEventListener('change',renderMembers);
renderMembers();
// 직책 정리: 사무총장은 회장단과 분리, 학회장은 'N대 학회장'(대수=기수), 아래 목록은 시트 값보다 우선
var ROLES=[["25기","손소희","25대 사무총장"],["24기","구민정","24대 사무총장"],["21기","전다슬","21대 사무총장"],["20기","김종헌","20기 회장"],["20기","김현창","20기 사무총장"],["20기","김정수","20대 사무총장"],["19기","조인우","19대 사무총장"],["18기","유진엽","18대 사무총장"],["17기","김태경","17대 사무총장"],["16기","이경일","16대 사무총장"],["14기","천승환","14대 사무총장"]];
function isSec(m){return /사무(총장|국장)/.test(m.r||'')}
function isBoard(m){return !!m.r&&!isSec(m)}
function roleNo(m){var x=String(m.r||'').match(/(\d+)/);return x?+x[1]:0}
function applyRoles(){
  MEMBERS.forEach(function(m){var n=parseInt(m.g,10),r=String(m.r||'').trim();
    if(r&&n&&/학회장/.test(r)&&!/\d+\s*[대기]/.test(r))m.r=(r==='학회장'?'':'')+n+'대 '+r});
  ROLES.forEach(function(x){
    var f=MEMBERS.filter(function(m){return m.g===x[0]&&m.n===x[1]})[0];
    if(f)f.r=x[2];else MEMBERS.push({g:x[0],n:x[1],r:x[2],cat:'',x:1});
  });
}
// 공개 명단 불러오기 (구글시트 → Apps Script GET)
// 네트워크 통계: 명단(구분·기수·성별)에서 자동 집계. 성별은 명단에 s(남/여) 값이 있을 때만 표시
function donut(box,rows,center){
  var tot=rows.reduce(function(a,r){return a+r[1]},0);if(!tot){box.parentNode.hidden=true;return}
  var COL=['#9E1915','#D8485E','#E99AA8','#8C1D40','#7F8590','#C9CCD4'],R=44,C=2*Math.PI*R,off=0,svg='',lg='';
  rows.forEach(function(r,i){var L=r[1]/tot*C,c=COL[i%COL.length];
    svg+='<circle cx="62" cy="62" r="'+R+'" stroke="'+c+'" stroke-dasharray="0 '+C+'" data-d="'+Math.max(L-1.5,0)+' '+C+'" stroke-dashoffset="'+(-off)+'"/>';off+=L;
    lg+='<li><i style="background:'+c+'"></i>'+esc(r[0])+'<span>'+r[1]+'명<em>'+Math.round(r[1]/tot*100)+'%</em></span></li>'});
  box.innerHTML='<div class="ct"><svg viewBox="0 0 124 124">'+svg+'</svg><b>'+center(tot)+'</b></div><ul class="lg">'+lg+'</ul>';
  box.parentNode.hidden=false;
  setTimeout(function(){$$('circle',box).forEach(function(c){c.setAttribute('stroke-dasharray',c.dataset.d)})},200);
}
function fitCols(box){var n=box.children.length,w=window.innerWidth,c=w<=760?1:w<=1100?2:3;box.style.gridTemplateRows=c>1?'repeat('+Math.ceil(n/c)+',auto)':''}
window.addEventListener('resize',function(){var b=$('#ncCat .hb');if(b&&b.children.length)fitCols(b)});
function hbars(box,rows){
  var tot=rows.reduce(function(a,r){return a+r[1]},0),mx=Math.max.apply(null,rows.map(function(r){return r[1]}))||1;
  box.innerHTML=rows.map(function(r){return '<div class="hr'+(r[2]?' etc':'')+'" title="'+esc(r[0])+' '+r[1]+'명"><span class="hl">'+esc(r[0])+'</span><span class="ht"><s data-w="'+Math.max(r[1]/mx*100,3)+'"></s></span><span class="hv">'+r[1]+'<em>'+(tot?Math.round(r[1]/tot*100):0)+'%</em></span></div>'}).join('');
  fitCols(box);var mo=$('#nMore');if(mo){mo.hidden=rows.length<=8;box.classList.add('cl');mo.textContent='전체 '+rows.length+'개 보기'}
  box.parentNode.hidden=false;
  setTimeout(function(){$$('.ht s',box).forEach(function(s){s.style.width=s.dataset.w+'%'})},200);
}
function tally(key,norm,list){var m={},o=[];(list||MEMBERS).forEach(function(x){var k=norm?norm(x[key]):String(x[key]||'').trim();if(!k)return;if(!(k in m)){m[k]=0;o.push(k)}m[k]++});return o.map(function(k){return [k,m[k]]})}
var ENR_FROM=21,NSEG='all'; // 재학생 = ENR_FROM기 이상 (5학기제 마지막 재학 기수 기준). 새 학기에 졸업 기수가 생기면 이 숫자를 올리세요
function genNo(m){var n=parseInt(m.g,10);return isNaN(n)?0:n}
function isStu(m){return genNo(m)>=ENR_FROM}
function maxGen(){return Math.max.apply(null,MEMBERS.map(genNo))}
function drawCat(){
  var list=NSEG==='st'?MEMBERS.filter(isStu):NSEG==='al'?MEMBERS.filter(function(m){return !isStu(m)}):MEMBERS;
  var cat=tally('cat',null,list);  var etc=0,blank=list.filter(function(m){return !String(m.cat||'').trim()}).length;
  cat=cat.filter(function(r){if(r[0]==='기타'){etc+=r[1];return false}return true});etc+=blank;
  cat.sort(function(a,b){return b[1]-a[1]});
  if(etc)cat.push(['기타·미분류',etc,true]);
  if(cat.length)hbars($('#ncCat .hb'),cat);else $('#ncCat').hidden=true;
  $$('#nSeg button').forEach(function(b){b.classList.toggle('on',b.dataset.s===NSEG)});
}
$('#nMore').addEventListener('click',function(){var h=$('#ncCat .hb');h.classList.toggle('all');this.textContent=h.classList.contains('all')?'접기':'전체 '+h.children.length+'개 보기'});
$('#nSeg').addEventListener('click',function(e){var b=e.target.closest('button');if(!b)return;NSEG=b.dataset.s;drawCat()});
function renderNetStats(){
  var w=$('#nst');if(!w||!MEMBERS.length)return;w.hidden=false;
  var st=MEMBERS.filter(isStu);
  if(st.length&&st.length<MEMBERS.length)donut($('#ncSt .dn'),[['재학생 ('+ENR_FROM+'~'+maxGen()+'기)',st.length],['동문',MEMBERS.length-st.length]],function(t){return t+'<small>명</small>'});else $('#ncSt').hidden=true;
  drawCat();
  var sx=tally('s',function(v){v=String(v||'').trim();return /^(남|m|male)/i.test(v)?'남성':/^(여|f|female)/i.test(v)?'여성':''}).sort(function(a,b){return a[0]<b[0]?-1:1});
  if(sx.length){var tm=sx.reduce(function(a,r){return a+r[1]},0);donut($('#ncSex .dn'),sx,function(t){var f=sx.filter(function(r){return r[0]==='여성'})[0];return Math.round((f?f[1]:0)/tm*100)+'%<small>여성</small>'})}else $('#ncSex').hidden=true;
}
// 학사일정: data/schedule.json 에서 불러옴 (없으면 화면에 들어 있는 기본값 유지). 자동 수집 스크립트가 이 파일만 갱신하면 됩니다
fetch('data/schedule.json',{cache:'no-cache'}).then(function(r){return r.json()}).then(function(d){
  if(!d||!d.rows||!d.rows.length)return;
  $('#schT').textContent=d.title;
  $('#schB').innerHTML=d.rows.map(function(r){return '<tr><th>'+esc(r[0])+'</th><td>'+esc(r[1])+'</td></tr>'}).join('');
  if(d.note)$('#schN').textContent=d.note;
}).catch(function(){});
function loadMembers(){
  if(!AUTH.api){MEMBERS_STATE='error';renderMembers();return}
  fetch(AUTH.api).then(function(r){return r.json()}).then(function(d){
    if(!d.ok||!d.members)throw 0;
    MEMBERS=d.members.map(function(m,i){m.i=i;return m});
    applyRoles();
    GENS=[];MEMBERS.forEach(function(m){if(GENS.indexOf(m.g)<0)GENS.push(m.g)});
    $('#ngen').innerHTML='<option value="">전체 기수</option>'+GENS.map(function(g){return '<option>'+esc(g)+'</option>'}).join('');
    MEMBERS_STATE='ok';updateCount();renderMembers();renderNetStats();restoreSession();
  }).catch(function(){MEMBERS_STATE='error';renderMembers()});
}
loadMembers();
// 교수진 카드 (공개: 이름·강의·보직·이메일 / 전화번호는 로그인 서버에서만 받음)
var PROFS=[
 {n:"강창동",img:"img/prof/kang-changdong.jpg",lec:"AI유통마케팅",pos:"EMBA학과 학과장",email:"cdkang@khu.ac.kr",extra:"교과목 SCM 경영, 유통마케팅 · 연구실 글로벌 미래교육관 216호"},
 {n:"김광용",img:"img/prof/kim-gwangyong.jpg",lec:"지속가능경영",email:"resultant@naver.com"},
 {n:"김태경",img:"img/prof/kim-taekyung.jpg",lec:"문화컨텐츠마케팅",email:"sdkimch123@naver.com"},
 {n:"성상용",img:"img/prof/seong-sangyong.jpg",lec:"벤처창업론",email:"ssy1952@naver.com"},
 {n:"손유경",lec:"CRM개론",email:"son8027@khu.ac.kr"},
 {n:"송세영",lec:"사업계획서이론과실전",email:"ssy4743@naver.com"},
 {n:"신현주",lec:"경영정보시스템",email:"nayarexia@nate.com"},
 {n:"안여령",lec:"오케스트라리더십",email:"manito92@gmail.com"},
 {n:"정권택",lec:"AI시대의인적자원관리",email:"seriojkt@gmail.com"}
];
var PROF_PHONE=null;
var SILH='<svg viewBox="0 0 88 88" aria-hidden="true"><rect width="88" height="88" fill="#fff"/><circle cx="44" cy="34" r="15" fill="#D4D4DA"/><path d="M14 88c0-20 13-31 30-31s30 11 30 31z" fill="#D4D4DA"/></svg>';
function renderProfs(){
  $('#people').innerHTML=PROFS.map(function(p){
    var ph=PROF_PHONE&&PROF_PHONE[p.n];
    return '<article class="person t-prof"><div class="avatar">'+(p.img?'<img src="'+p.img+'" alt="'+esc(p.n)+' 교수" loading="lazy">':SILH)+'</div><div><h3>'+esc(p.n)+' <span class="badge">'+(p.pos?esc(p.pos):'교수')+'</span></h3><div class="org">강의 · '+esc(p.lec)+'</div>'+(p.extra?'<div class="role">'+esc(p.extra)+'</div>':'')+'<div class="talk">✉ <a href="mailto:'+esc(p.email)+'">'+esc(p.email)+'</a><br>☎ '+(ph?'<a href="tel:'+esc(ph.replace(/[^0-9+]/g,''))+'">'+esc(ph)+'</a>':'<span style="color:#B9B9B9">●●●-●●●●-●●●● 🔒 인증 후 공개</span>')+'</div></div></article>';
  }).join('');
}
renderProfs();
// 동문소식 게시판: 아래 목록에 한 줄씩 추가하면 날짜순(최신순)으로 자동 정렬되고, 10개까지 보이며 나머지는 더보기로 열립니다.
// t: "news"(보도) | "event"(행사소식)
var NEWS=[
 {d:"2026-11-04",t:"news",src:"서울경제TV",title:"경희대 경영대학원 EMBA학과, 내달 12일 '경영혁신·성장 컨퍼런스' 개최",sum:"12월 12일 오후 2시, 강연 7개 세션과 선착순 7개 팀의 모의 IR 피칭으로 열리는 학과 컨퍼런스 소식입니다.",url:"https://www.sentv.co.kr/article/view/sentv202611030199"},
 {d:"2026-08-28",t:"news",src:"비욘드포스트",title:"경희대 경영대학원 EMBA 관련 보도",sum:"비욘드포스트에 실린 경희대 경영대학원 EMBA 기사입니다. 제목을 누르면 원문으로 이동합니다.",url:"http://www.beyondpost.co.kr/view.php?ud=2026082816271318159aeda69934_30"},
 {d:"2026-08-21",t:"event",src:"밴드 · 제23대 학회",title:"방향성 사전미팅 회의록 공유",sum:"7월 25일 열린 ‘미래지향적인 EMBA로 나아가기 위한 방향성 사전미팅’의 회의록을 학회가 공유했습니다.",url:"https://band.us/band/53620165/post/926300192"},
 {d:"2026-08-19",t:"event",src:"밴드 · 제23대 학회",title:"20기 학위수여식 초대장 안내",sum:"8월 22일(토) 오후 4시, 오비스홀 308호에서 열린 20기 학위수여식 초대장을 공유했습니다.",url:"https://band.us/band/53620165/post/926300176"},
 {d:"2026-08-19",t:"event",src:"밴드 · 제23대 학회",title:"2026학년도 2학기 주요 행사 일정 안내",sum:"2학기 주요 행사 일정을 공유하고, 8월 22일 25기 신입생 OT와 20기 학위수여식 개최를 알렸습니다.",url:"https://band.us/band/53620165/post/926300175"},
 {d:"2026-08-05",t:"event",src:"밴드 · 제23대 학회",title:"원우·동문 인식조사 참여 안내",sum:"1기~25기 원우·동문을 대상으로 한 무기명 설문(약 10분)입니다. 결과는 학과 운영 협의의 근거자료로 쓰입니다.",url:"https://band.us/band/53620165/post/926300169"},
 {d:"2026-04-24",t:"news",src:"비즈니스코리아",title:"경희대 경영대학원 EMBA, 2026학년도 후기 신입생 모집 접수",sum:"4월 13일부터 5월 15일까지 접수했으며, 운영 체계가 5학기에서 4학기로 바뀐 점을 전했습니다.",url:"https://www.businesskorea.co.kr/news/articleView.html?idxno=268429"},
 {d:"2026-03-19",t:"news",src:"한국강사신문",title:"경희대 경영대학원 EMBA, 59년 전통 넘어 강력한 동문 네트워크로 '최고의 리더 양성소' 입증",sum:"24기 신입생 환영회·개강연과 등산·골프 등 동문회 연간 행사를 소개한 기사입니다.",url:"https://www.lecturernews.com/news/articleView.html?idxno=198931"},
 {d:"2025-11-11",t:"news",src:"대학저널",title:"경희대 경영대학원 EMBA, 2026학년도 전기 신입생 모집… 오는 11월 24일 마감",sum:"전기 신입생 원서 접수 마감(11월 24일)과 면접·합격자 발표 일정, 과정의 특징을 전했습니다.",url:"https://dhnews.co.kr/news/view/1065590313607709"}
];
var NEWS_SHOW=10;
var SITE='https://e-mba.io/';
var ICON_SH='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="M8.6 10.5l6.8-4M8.6 13.5l6.8 4"/></svg>';
function nid(n){var h=0,t=n.url;for(var i=0;i<t.length;i++)h=(h*31+t.charCodeAt(i))>>>0;return h.toString(36)}
var SHB=null,SHT=null,SHD=null;
function toast(m){if(!SHT){SHT=document.createElement('div');SHT.className='sht';document.body.appendChild(SHT)}SHT.textContent=m;SHT.classList.add('on');clearTimeout(SHT._t);SHT._t=setTimeout(function(){SHT.classList.remove('on')},2400)}
function copyText(t,msg){
  function ok(){toast(msg||'링크를 복사했습니다')}
  if(navigator.clipboard&&window.isSecureContext)navigator.clipboard.writeText(t).then(ok,function(){fb()});else fb();
  function fb(){var a=document.createElement('textarea');a.value=t;a.style.cssText='position:fixed;opacity:0';document.body.appendChild(a);a.select();try{document.execCommand('copy')}catch(e){}a.remove();ok()}
}
function openShare(d){
  SHD=d;
  if(!SHB){
    SHB=document.createElement('div');SHB.className='shb';
    SHB.innerHTML='<div class="shm" role="dialog" aria-label="공유하기"><h4>공유하기</h4><p id="shT"></p><div class="shg">'+
     '<button type="button" data-c="kakao"><i style="background:#FEE500;color:#3A1D1D">K</i>카카오톡</button>'+
     '<button type="button" data-c="band"><i style="background:#06C755">B</i>밴드</button>'+
     '<button type="button" data-c="blog"><i style="background:#03C75A">N</i>네이버 블로그</button>'+
     '<button type="button" data-c="insta"><i style="background:linear-gradient(45deg,#F9A83A,#D6249F,#515BD4)">IG</i>인스타그램</button>'+
     '<button type="button" data-c="fb"><i style="background:#1877F2">f</i>페이스북</button>'+
     '<button type="button" data-c="copy"><i style="background:#6B7280">⧉</i>링크 복사</button></div><button type="button" class="shx">닫기</button></div>';
    document.body.appendChild(SHB);
    SHB.addEventListener('click',function(e){if(e.target===SHB||e.target.closest('.shx'))closeShare()});
    $$('.shg button',SHB).forEach(function(b){b.addEventListener('click',function(){doShare(b.dataset.c)})});
    document.addEventListener('keydown',function(e){if(e.key==='Escape'&&SHB.classList.contains('on'))closeShare()});
  }
  $('#shT').textContent=d.title;SHB.classList.add('on');
}
function closeShare(){if(SHB)SHB.classList.remove('on')}
function doShare(c){
  var d=SHD;if(!d)return;
  var link=d.url.replace('?','?utm_source='+c+'&utm_medium=share&').replace(/^([^?]*)#/,'$1?utm_source='+c+'&utm_medium=share#');
  var e=encodeURIComponent;
  if(c==='kakao'){
    if(navigator.share){navigator.share({title:d.title,text:d.text,url:link}).catch(function(){});}
    else{copyText(link,'링크를 복사했습니다. 카카오톡에 붙여넣어 보내 주세요');}
  }else if(c==='band')window.open('https://band.us/plugin/share?body='+e(d.title+'\n'+link)+'&route='+e(link),'_blank','noopener');
  else if(c==='blog')window.open('https://blog.naver.com/openapi/share?url='+e(link)+'&title='+e(d.title),'_blank','noopener');
  else if(c==='fb')window.open('https://www.facebook.com/sharer/sharer.php?u='+e(link),'_blank','noopener');
  else if(c==='insta')copyText(link,'링크를 복사했습니다. 인스타그램 스토리·프로필 링크에 붙여넣어 주세요');
  else copyText(link);
  closeShare();
}
(function(){var q=location.search.match(/[?&]n=([^&#]+)/);if(!q)return;
  function hl(){var b=document.querySelector('#nlist .nshare[data-s="'+q[1]+'"]');if(!b){var m=$('#nmoreBtn');if(m){m.click();b=document.querySelector('#nlist .nshare[data-s="'+q[1]+'"]')}}
    if(b){var li=b.closest('li');li.classList.add('hl');setTimeout(function(){li.scrollIntoView({behavior:'smooth',block:'center'})},500)}}
  if(!location.hash)location.hash='#/network';setTimeout(hl,600);
})();
function renderNews(all){
  var list=$('#nlist');if(!list)return;
  var arr=NEWS.slice().sort(function(a,b){return a.d<b.d?1:a.d>b.d?-1:0});
  list.innerHTML=arr.map(function(n,i){
    var hid=(!all&&i>=NEWS_SHOW)?' hidden':'';
    return '<li'+hid+'><a href="'+esc(n.url)+'" target="_blank" rel="noopener"><span class="nd">'+esc(n.d.replace(/-/g,'.'))+'</span><div class="nb"><div class="nt"><span class="ndm">'+esc(n.d.slice(2).replace(/-/g,'.'))+'</span><span class="ntag'+(n.t==='event'?' ev':'')+'">'+(n.t==='event'?'행사소식':'보도')+'</span><span class="nsrc">'+esc(n.src)+'</span><span class="nsum">'+esc(n.sum)+'</span></div><h3>'+esc(n.title)+'</h3></div><span class="nar" aria-hidden="true">↗</span></a><button type="button" class="nshare" data-s="'+nid(n)+'" aria-label="공유하기" title="공유하기">'+ICON_SH+'</button></li>';
  }).join('');
  $$('#nlist .nshare').forEach(function(b){b.addEventListener('click',function(){var n=NEWS.filter(function(x){return nid(x)===b.dataset.s})[0];if(n)openShare({title:n.title,text:n.title+' - 경희 EMBA',url:SITE+'?n='+nid(n)+'#/network'})})});
  var w=$('#nmoreWrap');
  if(!all&&arr.length>NEWS_SHOW){w.innerHTML='<button type="button" class="nmore" id="nmoreBtn">더보기 ('+(arr.length-NEWS_SHOW)+')</button>';$('#nmoreBtn').addEventListener('click',function(){renderNews(true)})}
  else w.innerHTML='';
}
renderNews();
// 경조사: 카드 한 장 = CARE 한 줄. k:"ok"(경사·축하 꽃다발) | "sad"(조사·장례화환)
var ICON_OK='<svg class="ic" viewBox="0 0 100 100" aria-hidden="true"><path d="M50 96 30 52h40z" fill="#F2B6C4"/><path d="M50 96 38 52h24z" fill="#E994A8" opacity=".7"/><ellipse cx="34" cy="47" rx="6" ry="13" transform="rotate(-35 34 47)" fill="#7DB88A"/><ellipse cx="66" cy="47" rx="6" ry="13" transform="rotate(35 66 47)" fill="#7DB88A"/><circle cx="36" cy="38" r="12" fill="#F29BB0"/><circle cx="64" cy="36" r="12" fill="#F7C85C"/><circle cx="50" cy="25" r="13" fill="#E86C8C"/><circle cx="50" cy="25" r="4.5" fill="#FBE3A0"/><circle cx="36" cy="38" r="4" fill="#FBD3DC"/><circle cx="64" cy="36" r="4" fill="#FFF0BE"/><path d="M42 60q8 6 16 0l-3 8q-5 3-10 0z" fill="#C8374D"/></svg>';
var ICON_SAD='<svg class="ic" viewBox="0 0 100 100" aria-hidden="true"><path d="M50 98V68M33 98l17-30 17 30" stroke="#7F8590" stroke-width="3" fill="none" stroke-linecap="round"/><circle cx="50" cy="40" r="31" fill="#fff" stroke="#B9BDC8" stroke-width="2"/><g fill="#fff" stroke="#AEB3BF" stroke-width="1.5"><circle cx="50" cy="14" r="7"/><circle cx="68" cy="22" r="7"/><circle cx="76" cy="40" r="7"/><circle cx="68" cy="58" r="7"/><circle cx="50" cy="66" r="7"/><circle cx="32" cy="58" r="7"/><circle cx="24" cy="40" r="7"/><circle cx="32" cy="22" r="7"/></g><g fill="#8DB59A" opacity=".85"><circle cx="60" cy="18" r="3"/><circle cx="72" cy="30" r="3"/><circle cx="72" cy="50" r="3"/><circle cx="60" cy="62" r="3"/><circle cx="40" cy="62" r="3"/><circle cx="28" cy="50" r="3"/><circle cx="28" cy="30" r="3"/><circle cx="40" cy="18" r="3"/></g><rect x="38" y="28" width="24" height="24" rx="2" fill="#1E1E24"/><path d="M44 36h12M44 44h12" stroke="#fff" stroke-width="2.5" stroke-linecap="round"/></svg>';
var CARE=[
 {k:"sad",gen:"14기",name:"한미옥",t:"모친상",rows:[["故인","박정희님"],["별세","2026.09.12(토)"]],note:"삼가 고인의 명복을 빕니다.",url:"https://www.wooribugo4.com/page/funeral/view.php?uri=P189TXpRek5qY3cmX209MjkwOTI3MQ==",cta:"모바일 부고장"},
 {k:"ok",gen:"23기",name:"권오규",t:"차녀 혼례",rows:[["일시","2026.09.05(토) 오후 1시 50분"],["장소","더그랜드컨벤션센터 1층 엘리제홀 (충북 제천)"]],note:"결혼을 진심으로 축하드립니다.",url:"https://www.heumcard.com/cards/suhongsohee",cta:"청첩장 보기"},
 {k:"sad",gen:"2기",name:"신병규",t:"빙모상",rows:[["故인","이무출님 (향년 88세)"],["발인","08.02 오전 8시"],["장소","한양대학교병원 장례식장 6호실"]],note:"조화는 정중히 사양합니다.",url:"https://www.wooribugo4.com/page/funeral/view.php?_=MzM1NTE1&_m=2832831&mourner=true",cta:"모바일 부고장"},
 {k:"sad",gen:"24기",name:"박영준",t:"부친상",rows:[["故인","박상유님"],["발인","2026.08.02(일) 오전 11시"],["장소","쉴낙원 서울장례식장 VIP 1호실"]],note:"삼가 고인의 명복을 빕니다.",url:"https://www.wooribugo4.com/page/funeral/view.php?uri=P189TXpNMU5UTXkmX209MjgzMzAzNg==",cta:"모바일 부고장"},
 {k:"sad",gen:"22기",name:"김진선",t:"외조모상",rows:[["故인","황복례님 (외조모)"]],note:"삼가 고인의 명복을 빕니다.",url:"https://bugonara.com/funeral/view_v2/30107?ngt=1&mn_idx=256607",cta:"모바일 부고장"}
];
function renderCare(){
  var box=$('#care');if(!box)return;
  box.innerHTML=CARE.map(function(c){
    var ok=c.k==='ok';
    return '<div class="cs '+c.k+'" tabindex="0">'+(ok?ICON_OK:ICON_SAD)+
      '<div class="cs-f"><span class="cs-tag">'+(ok?'축하':'근조')+'</span><div class="cs-n">'+esc(c.gen)+' '+esc(c.name)+'</div><div class="cs-t">'+esc(c.t)+'</div></div>'+
      '<div class="cs-b"><h4>'+esc(c.gen)+' '+esc(c.name)+' '+esc(c.t)+'</h4>'+c.rows.map(function(r){return '<div><b>'+esc(r[0])+'</b>'+esc(r[1])+'</div>'}).join('')+'<div>'+esc(c.note)+'</div><a href="'+esc(c.url)+'" target="_blank" rel="noopener">'+esc(c.cta)+' ↗</a></div></div>';
  }).join('');
  $$('#care .cs').forEach(function(el){el.addEventListener('click',function(e){if(e.target.closest('a'))return;var was=el.classList.contains('open');$$('#care .cs.open').forEach(function(o){o.classList.remove('open')});if(!was)el.classList.add('open')})});
}
renderCare();
var GAL_SHOW=10;
// EMBA GALLERY: 앨범 한 개 = GAL 한 줄. p의 첫 사진이 대표(썸네일) 사진. 사진 파일: img/gallery/<id>/<번호>.jpg (원본) · <번호>_t.jpg (1:1 썸네일)
var GAL=[{"id":"20261104-1","d":"2026.11.04","t":"재학생 친선골프","p":[["02","단체 사진"],["01","23기 라운딩"],["03","티오프 전"],["04","회식"],["05","회식"]]},{"id":"20261015-1","d":"2026.10.15","t":"EMBA 동문회장배 골프대회","p":[["02","단체 사진"],["01","김윤석 동문회장"],["03","메달리스트"],["04","시상식"],["05","신페리오 우승"]]},{"id":"20260912-1","d":"2026.09.12","t":"재학생 네트워킹데이","p":[["04","행사 포스터"],["01","발표"],["02","발표"],["03","조별 네트워킹"]]},{"id":"20260905-1","d":"2026.09.05","t":"개강연 · 신입생 환영회","p":[["01","개강연 · 신입생 환영회"],["02","25기 신입생"],["03","축하공연"],["04","축하공연"],["05","축하공연"]]},{"id":"20260822-2","d":"2026.08.22","t":"20기 학위수여식","p":[["03","학위 수여"],["01","기수회장 답사"],["02","학위 수여"],["04","학위 수여"],["05","학위 수여"],["06","학위 수여"],["07","학위 수여"],["08","학위 수여"],["09","학위 수여"],["10","학위 수여"],["11","졸업생 답사"],["12","학과장님"],["13","학과장님"],["14","행사 준비"]]},{"id":"20260822-1","d":"2026.08.22","t":"25기 신입생 오리엔테이션","p":[["01","단체 사진"],["02","선배와의 대화"],["03","선배와의 대화"],["04","학과장님 소개"]]}];
function galSrc(a,p,t){if(a.r)return t?(p[2]||p[0]):p[0];return 'img/gallery/'+a.id+'/'+p[0]+(t?'_t':'')+'.jpg'}
function renderGal(all){
  var box=$('#gal');if(!box)return;
  var arr=GAL.slice().sort(function(a,b){return a.d<b.d?1:a.d>b.d?-1:0});
  box.innerHTML=arr.map(function(a,i){
    if(!all&&i>=GAL_SHOW)return '';
    return '<button type="button" class="gc" data-i="'+GAL.indexOf(a)+'" aria-label="'+esc(a.t)+' 앨범 열기"><img src="'+galSrc(a,a.p[0],true)+'" alt="'+esc(a.t)+'" loading="lazy"><span class="gc-n">'+a.p.length+'장</span><span class="gc-h">펼쳐보기</span><span class="gc-i"><div class="gc-d">'+esc(a.d)+'</div><div class="gc-t">'+esc(a.t)+'</div></span></button>';
  }).join('');
  $$('#gal .gc').forEach(function(b){b.addEventListener('click',function(){openAlbum(GAL[+b.dataset.i],b)})});
  var w=$('#galMore');
  if(!all&&arr.length>GAL_SHOW){w.innerHTML='<button type="button" class="nmore" id="galMoreBtn">더보기 ('+(arr.length-GAL_SHOW)+')</button>';$('#galMoreBtn').addEventListener('click',function(){renderGal(true)})}
  else w.innerHTML='';
}
(function(){var q=location.search.match(/[?&]a=([^&#]+)/);if(!q)return;if(!location.hash)location.hash='#/about';
  setTimeout(function(){var i=-1;GAL.forEach(function(a,k){if(a.id===q[1])i=k});var c=document.querySelector('#gal .gc[data-i="'+i+'"]');if(c){c.scrollIntoView({block:'center'});setTimeout(function(){c.click()},400)}},900)})();
var GOV=null,GLB=null,GLB_I=0,GLB_A=null;
function openAlbum(a,card){
  if(GOV)return;
  var r=card.getBoundingClientRect();
  var ov=document.createElement('div');ov.className='gov';
  ov.style.cssText='top:'+r.top+'px;left:'+r.left+'px;width:'+r.width+'px;height:'+r.height+'px';
  ov.innerHTML='<div class="gov-bg" style="background-image:url('+galSrc(a,a.p[0],true)+')"></div><div class="gov-in"><div class="gov-h"><div><div class="gov-d">'+esc(a.d)+'</div><h3 class="gov-t">'+esc(a.t)+'</h3><div class="gov-c">사진 '+a.p.length+'장 · 사진을 누르면 크게 볼 수 있습니다</div></div><div class="gov-b"><button type="button" class="gov-s">공유</button><button type="button" class="gov-x" aria-label="닫기">✕</button></div></div><div class="gov-g">'+a.p.map(function(p,i){return '<button type="button" class="gp" style="--i:'+i+'" data-k="'+i+'"><img src="'+galSrc(a,p,true)+'" alt="'+esc(p[1])+'" loading="lazy"><span>'+esc(p[1])+'</span></button>'}).join('')+'</div></div>';
  document.body.appendChild(ov);document.body.style.overflow='hidden';
  GOV={el:ov,card:card,a:a};
  ov.querySelector('.gov-x').addEventListener('click',closeAlbum);
  ov.querySelector('.gov-s').addEventListener('click',function(){openShare({title:a.d+' '+a.t+' - 경희 EMBA 갤러리',text:a.t+' - 경희 EMBA',url:SITE+'?a='+a.id+'#/about'})});
  $$('.gp',ov).forEach(function(b){b.addEventListener('click',function(){openLb(a,+b.dataset.k)})});
  void ov.offsetWidth;ov.classList.add('open');
}
function closeAlbum(){
  if(!GOV)return;var g=GOV;GOV=null;
  var r=g.card.getBoundingClientRect();
  g.el.classList.remove('open');
  g.el.style.cssText='top:'+r.top+'px;left:'+r.left+'px;width:'+r.width+'px;height:'+r.height+'px;opacity:.0';
  document.body.style.overflow='';
  setTimeout(function(){g.el.remove()},620);
}
function openLb(a,i){
  GLB_A=a;GLB_I=i;
  if(!GLB){
    GLB=document.createElement('div');GLB.className='glb';
    GLB.innerHTML='<button type="button" class="glb-x" aria-label="닫기">✕</button><button type="button" class="glb-p" aria-label="이전">‹</button><button type="button" class="glb-n" aria-label="다음">›</button><img alt=""><div class="glb-c"></div>';
    document.body.appendChild(GLB);
    GLB.querySelector('.glb-x').addEventListener('click',closeLb);
    GLB.querySelector('.glb-p').addEventListener('click',function(e){e.stopPropagation();stepLb(-1)});
    GLB.querySelector('.glb-n').addEventListener('click',function(e){e.stopPropagation();stepLb(1)});
    GLB.addEventListener('click',function(e){if(e.target===GLB)closeLb()});
    var sx=0;GLB.addEventListener('touchstart',function(e){sx=e.touches[0].clientX},{passive:true});
    GLB.addEventListener('touchend',function(e){var dx=e.changedTouches[0].clientX-sx;if(Math.abs(dx)>50)stepLb(dx<0?1:-1)});
  }
  GLB.classList.add('on');void GLB.offsetWidth;GLB.classList.add('show');showLb();
}
function showLb(){
  var p=GLB_A.p[GLB_I],im=GLB.querySelector('img');
  var n=im.cloneNode();n.src=galSrc(GLB_A,p,false);n.alt=p[1];im.replaceWith(n);
  GLB.querySelector('.glb-c').innerHTML=esc(p[1])+'<small>'+esc(GLB_A.t)+' · '+(GLB_I+1)+' / '+GLB_A.p.length+'</small>';
}
function stepLb(d){GLB_I=(GLB_I+d+GLB_A.p.length)%GLB_A.p.length;showLb()}
function closeLb(){if(!GLB)return;GLB.classList.remove('show');setTimeout(function(){GLB&&GLB.classList.remove('on')},250)}
document.addEventListener('keydown',function(e){
  if(GLB&&GLB.classList.contains('on')){if(e.key==='Escape')closeLb();else if(e.key==='ArrowLeft')stepLb(-1);else if(e.key==='ArrowRight')stepLb(1);return}
  if(GOV&&e.key==='Escape')closeAlbum();
});
renderGal();
// 소식 전하기로 올라온 글(경조사·갤러리)을 서버(/api/posts)에서 받아 화면에 합친다
function loadPosts(){
  fetch('/api/posts',{cache:'no-cache'}).then(function(r){return r.json()}).then(function(d){
    if(!d||!d.ok||!d.posts)return;
    CARE=CARE.filter(function(c){return !c.rid});GAL=GAL.filter(function(a){return !a.r});NEWS=NEWS.filter(function(n){return !n.rid});
    var care=[];
    d.posts.forEach(function(p){
      if(p.type==='care')care.push({rid:p.id,k:p.k,gen:p.gen,name:p.name,t:p.t,rows:p.rows||[],note:p.note||'',url:p.url||'',cta:p.cta||''});
      else if(p.type==='gallery'&&p.p&&p.p.length){
        var id='r'+p.id;
        GAL.push({id:id,r:1,d:p.d,t:p.t,p:p.p.map(function(x){return [x.u,x.c||'',x.t||x.u]})});
        if(p.s)NEWS.push({rid:p.id,d:p.d.replace(/\./g,'-'),t:'event',src:'학과 소식',title:p.t,sum:p.s,url:SITE+'?a='+id+'#/about'});
      }
    });
    CARE=care.concat(CARE);
    renderCare();renderGal();renderNews();
  }).catch(function(){});
}
window.EMBA_loadPosts=loadPosts;
loadPosts();
$('#siteShare').addEventListener('click',function(){openShare({title:'경희 EMBA | 경희대학교 경영대학원 EMBA학과',text:'경희 EMBA',url:SITE})});
// 로그인: 비공개 항목은 로그인 서버(Apps Script)가 원우로 확인한 경우에만 받아서 표시
$('#loginBtn').addEventListener('click',function(){
  if(PRIV)return logout();
  if(!AUTH.api)return openLogin('<p>인증 기능을 준비하고 있습니다. 급한 연락은 bob@khu.ac.kr로 문의해 주세요.</p>');
  stepEmail();
});
$('#loginModal').addEventListener('click',function(e){if(e.target===this||e.target.closest('[data-close]'))this.classList.remove('on')});
document.addEventListener('keydown',function(e){if(e.key==='Escape')$('#loginModal').classList.remove('on')});

/* ================= 행사 영상 ================= */
(function(){
  var v=$('#heroV');if(!v)return;
  if(window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches){v.removeAttribute('autoplay');v.pause()}
  else{var p=v.play();if(p&&p.catch)p.catch(function(){})}
})();

/* ================= 좌우 여백 로고: 경희 사자 · 목련 · 엠블럼 =================
   assets/khu-logo-*.png : 경희 상징 3종 원본 로고 (투명 배경), 옅게 깔아 장식으로만 사용 */
(function(){
  var dc=$('#deco');if(!dc)return;
  var SRC={l:'assets/khu-logo-lion.png',m:'assets/khu-logo-magnolia.png',e:'assets/khu-logo-emblem.png'};
  // [종류, 세로 위치(px), 페이지 중앙에서의 가로 거리, 폭, 회전, 상단(태블릿에도 표시)]
  var P=[
   ['m',36,-660,170,-8,1],['l',30,480,140,4,1],
   ['e',760,-850,240,-4,0],['m',1350,660,160,10,0],
   ['l',1950,-800,140,-4,0],['e',2650,660,230,4,0],
   ['m',3350,-810,160,-12,0],['l',4000,670,140,6,0],
   ['e',4750,-850,230,-3,0],['m',5450,660,160,12,0],
   ['l',6150,-790,140,-6,0],['e',6850,650,230,3,0]
  ];
  dc.innerHTML=P.map(function(p){
    return '<img class="'+(p[5]?'h':'m')+'" src="'+SRC[p[0]]+'" alt="" loading="lazy" style="top:'+p[1]+'px;left:calc(50% + '+p[2]+'px);width:'+p[3]+'px;transform:rotate('+p[4]+'deg)">';
  }).join('');
})();

/* ================= 히어로 ↔ 오른쪽 카드 높이 맞춤 =================
   카드 위쪽(모집중)은 영상 위쪽에, 아래쪽 버튼 끝은 영상 아래쪽에 맞춘다 (AIM과 동일) */
function syncHero(){
  var a=$('#aside');
  if(window.innerWidth<=1100){a.style.marginTop='';a.style.minHeight='';return}
  var v=$('#v-'+cur+' .video');if(!v)return;
  a.style.marginTop=(v.getBoundingClientRect().top-$('main').getBoundingClientRect().top)+'px';
  a.style.minHeight=v.offsetHeight+'px';
}
window.addEventListener('resize',syncHero);
if(document.fonts&&document.fonts.ready)document.fonts.ready.then(syncHero);

route();
