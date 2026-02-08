# 에이전트 스킬 매니저 (Agent Skills Manager) 가이드

이 문서는 **Agent Skills Manager** 확장 프로그램의 주요 기능, 설정 및 효과적인 활용 방법을 한국어로 상세히 설명합니다. 이 도구는 여러 IDE 환경에서 에이전트의 스킬(Skills)을 효율적으로 관리하고 설치할 수 있도록 돕습니다.

---

## 🚀 주요 기능 (Features)

1. **저장소 관리 (Repository Management)**:
   - 스킬 저장소를 쉽게 추가하거나 제거할 수 있습니다.
   - 저장소의 여러 브랜치(Branch)를 자유롭게 전환하며 최신 또는 특정 버전의 스킬을 탐색할 수 있습니다.

2. **간편한 스킬 설치 (Skill Installation)**:
   - 현재 활성화된 IDE의 스킬 디렉토리에 원하는 스킬을 즉시 설치합니다.
   - 복잡한 파일 복사 과정 없이 클릭 한 번으로 에이전트의 능력을 확장합니다.

3. **클라우드 스킬 검색 (~58,000개)**:
   - [claude-plugins.dev](https://claude-plugins.dev/)에서 제공하는 방대한 클라우드 카탈로그를 직접 검색할 수 있습니다.
   - 검색 후 엔터 키나 설치 버튼을 통해 즉시 다운로드 및 설치가 가능합니다.

4. **멀티 IDE 지원 (Multi-IDE Support)**:
   - VSCode, Cursor, Trae, Antigravity, Qoder, Windsurf, CodeBuddy 등 대다수의 현대적 AI IDE를 지원합니다.
   - 각 IDE별로 서로 다른 스킬 설치 경로를 자동으로 인식합니다.

5. **활성 디렉토리 표시 (Active Skills Directory)**:
   - 현재 어떤 디렉토리가 스킬 저장 및 실행 경로로 설정되어 있는지 직관적으로 보여줍니다.

---

## 📖 사용 방법 (Usage)

1. **패널 열기**: 에디터 좌측의 Activity Bar에서 **Agent Skills** 아이콘을 클릭하여 관리 패널을 엽니다.
2. **저장소 추가**: `+` 버튼을 눌러 스킬 저장소 URL(예: `https://github.com/anthropics/skills`)을 입력합니다.
3. **스킬 탐색**: 추가된 저장소를 펼쳐(Expand) 사용 가능한 스킬 목록을 확인합니다.
4. **설치**: 원하는 스킬을 체크한 후 **Install** 버튼을 클릭합니다.
5. **클라우드 검색**: 돋보기 아이콘을 클릭하여 클라우드 스킬을 검색하고, 마음에 드는 스킬을 찾아 설치합니다.

---

## 🗂️ 권장 스킬 컬렉션 (Skill Collections)

기본적으로 제공되거나 널리 사용되는 주요 저장소들입니다:

| 저장소 (Repository) | 설명 |
| :--- | :--- |
| **anthropics/skills** | Anthropic 공식 스킬 컬렉션 |
| **openai/skills** | OpenAI 공식 스킬 카탈로그 |
| **skillcreatorai/Ai-Agent-Skills** | 커뮤니티 주도 스킬 컬렉션 |
| **obra/superpowers** | Superpowers 기능 중심 스킬 모음 |
| **ComposioHQ/awesome-claude-skills** | 엄선된 최고급 Claude 스킬 컬렉션 |

> [!TIP]
> 더 많은 저장소는 [heilcheng/awesome-agent-skills](https://github.com/heilcheng/awesome-agent-skills)에서 찾아볼 수 있습니다.

---

## ⚙️ 설정 및 IDE별 경로 (Configuration)

이 확장은 사용하는 IDE에 따라 아래와 같은 경로에 스킬을 설치합니다:

- **Antigravity**: `.agent/skills`
- **Cursor**: `.cursor/skills`
- **VSCode**: `.github/skills`
- **Trae**: `.trae/skills`
- **Qoder**: `.qoder/skills`
- **Windsurf**: `.windsurf/skills`
- **CodeBuddy**: `.codebuddy/skills`

또한, 저장소 내의 숨겨진 디렉토리(예: `.curated`, `.experimental`)에 있는 스킬들도 자동으로 스캔하여 제공합니다.

---

## 💡 활용 팁 (Best Practices)

- **프로젝트별 스킬 맞춤화**: 진행 중인 프로젝트의 성격에 맞춰(예: ERP 개발 시 ERP 관련 스킬 위주로) 필요한 스킬만 골라 설치하여 에이전트의 효율을 극대화하세요.
- **클라우드 검색 활용**: 특정 라이브러리나 API 연동이 필요할 때 직접 코드를 짜기 전, `claude-plugins.dev` 검색을 통해 이미 잘 만들어진 스킬이 있는지 먼저 확인해 보세요.
- **브랜치 관리**: 실험적인 기능이 필요할 경우 `main` 브랜치 대신 `develop`이나 특정 기능 브랜치로 전환하여 새로운 스킬을 테스트해 볼 수 있습니다.

---
**License**: MIT
