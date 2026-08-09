export type TarotCardData = {
  en: {
    title: string;
    name: string;
    description: string;
    back: {
      heading: string;
      description: string;
      links?: {
        label: string;
        href: string;
      }[];
    };
  };

  ko: {
    title: string;
    name: string;
    description: string;
    back: {
      heading: string;
      description: string;
      links?: {
        label: string;
        href: string;
      }[];
    };
  };

  pl: {
    title: string;
    name: string;
    description: string;
    back: {
      heading: string;
      description: string;
      links?: {
        label: string;
        href: string;
      }[];
    };
  };
}

export const cards: TarotCardData[] = [
  {
    en: {
      title: "THE SEEKER",
      name: "Anna Ha",
      description: "3rd-year CS student & engineer in Seoul",
      back: {
        heading: "Hi, that's me ✦",
        description:
          "I've always wanted to understand how things work. Then I realized I could actually learn to build them myself.",
        links: [
          {
            label: "Portfolio →",
            href: "https://www.haanna.com/",
          },
          {
            label: "LinkedIn →",
            href: "https://www.linkedin.com/in/ha-anna/",
          },
        ],
      },
    },

    ko: {
      title: "THE SEEKER",
      name: "Anna Ha",
      description: "서울에서 공부하고 일하는 컴퓨터공학과 3학년",
      back: {
        heading: "저를 소개할게요 ✦",
        description:
          "무언가가 어떻게 작동하는지 알아가는 걸 좋아해요. 그러다 직접 만들어 볼 수 있다는 걸 알게 됐어요.",
        links: [
          {
            label: "웹사이트 →",
            href: "https://www.haanna.com/",
          },
          {
            label: "LinkedIn →",
            href: "https://www.linkedin.com/in/ha-anna/",
          },
        ],
      },
    },

    pl: {
      title: "THE SEEKER",
      name: "Anna Ha",
      description: "Studentka informatyki i inżynier, 3. rok, Seul",
      back: {
        heading: "Hej, to ja ✦",
        description:
          "Od zawsze chciałam rozumieć, jak działają różne rzeczy. W końcu odkryłam, że mogę też sama nauczyć się je tworzyć.",
        links: [
          {
            label: "Portfolio →",
            href: "https://www.haanna.com/",
          },
          {
            label: "LinkedIn →",
            href: "https://www.linkedin.com/in/ha-anna/",
          },
        ],
      },
    },
  },

  {
    en: {
      title: "THE QUESTION",
      name: "A Strange Little Detour",
      description: "Languages → AI → CS&E",
      back: {
        heading: "How I ended up here ✦",
        description:
          "I studied languages, then got a job as a software engineer at a startup building an AI chatbot for learning Korean. That experience made me want to go deeper into the technology, so I went back to school for CS.",
      },
    },

    ko: {
      title: "THE QUESTION",
      name: "조금 다른 길",
      description: "언어 → AI → 컴퓨터공학",
      back: {
        heading: "어쩌다 여기까지 왔을까요? ✦",
        description:
          "언어를 공부한 뒤, 한국어 학습을 위한 AI 챗봇을 만드는 스타트업에서 소프트웨어 엔지니어로 일했어요. 그 경험을 통해 기술을 더 깊이 알아가고 싶어졌고, 결국 다시 학교로 돌아와 컴퓨터공학을 공부하게 됐어요.",
      },
    },

    pl: {
      title: "THE QUESTION",
      name: "Mały skręt w bok",
      description: "Języki → AI → Informatyka",
      back: {
        heading: "Jak się tu znalazłam? ✦",
        description:
          "Studiowałam języki, a potem zaczęłam pracę jako software engineer w startupie tworzącym chatbota AI do nauki koreańskiego. To doświadczenie sprawiło, że chciałam lepiej zrozumieć technologię, więc wróciłam na studia — tym razem na informatykę.",
      },
    },
  },

  {
    en: {
      title: "THE BUILDER",
      name: "I Make Things",
      description: "Usually because I can't stop thinking about an idea",
      back: {
        heading: "A few rabbit holes ✦",
        description:
          "I've made an iOS app, an AI knowledge agent, an ASCII-art camera, an ASL recognizer, and a Pomodoro timer with cats.",
        links: [
          {
            label: "See the projects →",
            href: "https://www.haanna.com/#projects",
          },
          {
            label: "GitHub →",
            href: "https://github.com/ha-anna",
          },
        ],
      },
    },

    ko: {
      title: "THE BUILDER",
      name: "직접 만들어 봐요",
      description: "한번 떠오른 아이디어는 직접 해봐야 직성이 풀려요",
      back: {
        heading: "호기심이 만든 것들 ✦",
        description:
          "iOS 앱부터 AI 지식 에이전트, ASCII 아트 카메라, ASL 인식 모델, 고양이가 나오는 뽀모도로 타이머까지 이것저것 만들어 봤어요.",
        links: [
          {
            label: "프로젝트 보기 →",
            href: "https://www.haanna.com/#projects",
          },
          {
            label: "GitHub →",
            href: "https://github.com/ha-anna",
          },
        ],
      },
    },

    pl: {
      title: "THE BUILDER",
      name: "Lubię budować",
      description: "Zwykle kiedy jakiś pomysł nie daje mi spokoju",
      back: {
        heading: "To, co buduję ✦",
        description:
          "Eksperymentuję z różnymi rzeczami - aplikacją na iOS, agentem AI, aparatem tworzącym zdjęcia w ASCII, modelem rozpoznającym ASL i timerem Pomodoro z kotami.",
        links: [
          {
            label: "Zobacz projekty →",
            href: "https://www.haanna.com/#projects",
          },
          {
            label: "GitHub →",
            href: "https://github.com/ha-anna",
          },
        ],
      },
    },
  },

  {
    en: {
      title: "THE WHY",
      name: "Make It Useful",
      description: "I like solving problems more than collecting technologies",
      back: {
        heading: "The point of building ✦",
        description:
          "The tech is fun, but I'm happiest when something I make actually helps someone, saves them time, or makes something a little easier.",
      },
    },

    ko: {
      title: "THE WHY",
      name: "쓸모 있게 만들기",
      description: "기술을 모으는 것보다 문제를 해결하는 걸 좋아해요",
      back: {
        heading: "만드는 이유 ✦",
        description:
          "새로운 기술을 써보는 것도 재미있지만, 제가 만든 것이 누군가에게 도움이 되거나 시간을 아껴주거나 무언가를 조금 더 편하게 만들어줄 때 가장 뿌듯해요.",
      },
    },

    pl: {
      title: "THE WHY",
      name: "Tworzę po coś",
      description: "Technologia jest środkiem, nie celem",
      back: {
        heading: "Po co to wszystko tworzę ✦",
        description:
          "Sama technologia jest ciekawa, ale największą satysfakcję daje mi moment, kiedy coś, co stworzyłam, naprawdę komuś pomaga lub po prostu ułatwia życie.",
      },
    },
  },

  {
    en: {
      title: "THE APPRENTICE",
      name: "Keep Getting Better",
      description: "I want to become an engineer people can rely on",
      back: {
        heading: "What I'm working toward ✦",
        description:
          "I want to be the person who asks good questions, learns quickly, does solid work, and eventually has something useful to teach others.",
      },
    },

    ko: {
      title: "THE APPRENTICE",
      name: "계속 더 나아가기",
      description: "믿고 함께 일할 수 있는 엔지니어가 되고 싶어요",
      back: {
        heading: "만들면서 배우는 것 ✦",
        description:
          "좋은 질문을 던지고, 빠르게 배우고, 맡은 일을 제대로 해내는 사람이 되고 싶어요. 언젠가는 다른 사람에게도 무언가를 알려줄 수 있는 엔지니어가 되고 싶고요.",
      },
    },

    pl: {
      title: "THE APPRENTICE",
      name: "Ciągle się rozwijam",
      description: "Chcę zostać inżynierką, na której można polegać",
      back: {
        heading: "Do czego dążę ✦",
        description:
          "Chcę być osobą, która zadaje dobre pytania, szybko się uczy i solidnie wykonuje swoją pracę. A z czasem chciałabym też mieć coś wartościowego do przekazania innym.",
      },
    },
  },

  {
    en: {
      title: "THE WORLD",
      name: "Good People, Hard Problems",
      description: "That's probably where I'll do my best work",
      back: {
        heading: "My kind of environment ✦",
        description:
          "Smart people, high standards, room to take ownership, and a team that cares about what we're actually building.",
      },
    },

    ko: {
      title: "THE WORLD",
      name: "좋은 팀, 좋은 문제들",
      description: "아마 이런 곳에서 가장 잘할 수 있을 것 같아요",
      back: {
        heading: "함께하고 싶은 곳 ✦",
        description:
          "똑똑한 사람들과 높은 기준을 가지고 일하고, 스스로 맡아서 해볼 수 있는 환경. 그리고 우리가 실제로 무엇을 만들고 있는지 함께 고민하는 팀.",
      },
    },

    pl: {
      title: "THE WORLD",
      name: "Dobrzy ludzie, ciekawe problemy",
      description: "Właśnie w takim środowisku chciałabym pracować",
      back: {
        heading: "Miejsce dla mnie ✦",
        description:
          "Ludzie, od których można się uczyć, wysokie standardy, zaufanie i przestrzeń na własną inicjatywę. I przede wszystkim zespół, któremu zależy na tym, co wspólnie tworzymy.",
      },
    },
  },

  {
    en: {
      title: "THE HORIZON",
      name: "What's Next?",
      description: "I'm looking for somewhere to put all this curiosity to work",
      back: {
        heading: "Looking for my next adventure ✦",
        description:
          "I'm currently looking for an internship where I can learn from great people, work on real problems, and start contributing to something bigger.",
        links: [
          {
            label: "LinkedIn →",
            href: "https://www.linkedin.com/in/ha-anna/",
          },
        ],
      },
    },

    ko: {
      title: "THE HORIZON",
      name: "다음은 어디로?",
      description: "지금까지 쌓아온 호기심을 직접 써볼 곳을 찾고 있어요",
      back: {
        heading: "다음 모험을 찾는 중 ✦",
        description:
          "지금은 좋은 사람들에게 배우고, 실제 문제를 해결하고, 더 큰 무언가에 기여할 수 있는 소프트웨어 엔지니어링 인턴십을 찾고 있어요.",
        links: [
          {
            label: "LinkedIn →",
            href: "https://www.linkedin.com/in/ha-anna/",
          },
        ],
      },
    },

    pl: {
      title: "THE HORIZON",
      name: "Co dalej?",
      description: "Szukam miejsca, gdzie mogę wykorzystać swoją ciekawość",
      back: {
        heading: "Szukam kolejnego wyzwania ✦",
        description:
          "Chciałabym trafić do zespołu, od którego mogłabym się dużo nauczyć i z którym mogłabym pracować nad czymś naprawdę ciekawym.",
        links: [
          {
            label: "LinkedIn →",
            href: "https://www.linkedin.com/in/ha-anna/",
          },
        ],
      },
    },
  },
];