import i18next from 'i18next';
import locI18next from "loc-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
// -----------------------------------------------------------------------------------------------------------
// Avoid `console` errors in browsers that lack a console.
(function() {

// import bootstrap from 'bootstrap'
  window.analytics.track('LandingPage Opened')

  const resources = {
    ko: {
      translation: {
        title: '노트 가든',
        maincopy1: '남다른 공부법, 피어나는 지식',
        maincopy2: '노트가든',
        maincopy3: '',
        subcopy1: '필기만 하면 최적화된 학습 코스를 생성해 오랫동안 기억할 수 있도록 해드립니다.',
        point1: '1. 보기 좋게 필기하세요!',
        point2: '2. 바로 학습하세요!',
        point3: '3. 간편하게 관리하세요!',
        page2_1: '1 필기하기',
        page2_1_1: '지식의 정원에 씨앗을 심어보세요!',
        page2_2: '2 학습하기',
        page2_2_1: '문제를 생성하고 똑똑하게 학습하세요!',
        page2_3: '3 관리하기',
        page2_3_1: '체크리스트 관리, 지식과 일정을 함께 보관해요!',
        page3_1: '이런 분들에게',
        page3_2: '특히',
        page3_3: '필요해요!',
        page4_1: '프로그래밍 공부',
        page4_1_1: '전문지식을 잊으면',
        page4_1_2: '불편한 사람들',
        page4_2: '의학 계열',
        page4_2_1: '방대한 분량을',
        page4_2_2: '이해 빛 암기해야 하는 사람들',
        page4_3: '각종 자격증 시험',
        page4_3_1: '정해진 기간 안에 학습을',
        page4_3_2: '끝마쳐야 하는 사람들',
        page4_4: '법학 공부',
        page4_4_1: '오랫동안 잊으면 안 되는',
        page4_4_2: '공부를 하는 사람들',
        page4_5: '외국어 공부',
        page4_5_1: '새로운 단어 쌍들을 계속',
        page4_5_2: '학습해야 하는 사람들',
        page5_1: '노트가든만의 ',
        page5_2: '똑똑한',
        page5_3: '기능 소개!',
        page6_1: '무작정 쓰면서 외우지 마세요!',
        page6_1_1: '😀 자동 학습 코스 생성',
        page6_1_2: '필기만 하면 자동으로 학습코스를 만들어 드립니다',
        page6_2: '잊은 부분을 찾기 위해 처음부터 훑지 마세요!',
        page6_2_1: '😀 SR 알고리즘',
        page6_2_2: '까먹은 부분을 예상하여 맞춤 코스를 제공해 드립니다.',
        page6_3: '산더미 같이 책을 쌓아두고 공부하지 마세요!',
        page6_3_1: '😀 검색과 링크',
        page6_3_2: '원하는 학습 내용을 바로 찾을 수 있습니다.',
        page6_4: '복잡한 수식을 입력하기 위해 공들이지 마세요!',
        page6_4_1: '😀 수식 타이핑',
        page6_4_2: '편리한 수식 입력 기능으로 그대로 입력하세요!',
        page6_5: '손으로 가리면서 외우지 마세요!',
        page6_5_1: '😀 이미지 빈칸 문제',
        page6_5_2: '이미지 문제 기능으로 편하게 문제를 만드세요',
        page7: '알 수록',
        page7_1: '더욱 더 편한',
        page7_2: '세부 기능!',
        page8_1: '트리구조 노트',
        page8_1_1: '트리구조 노트는 학습 내용을 체계적으로 정리하기에 좋아요!',
        page8_2: '양방향 연결',
        page8_2_1: '지식 간에 링크를 걸어 여러분들만의 위키를 만드세요!',
        page8_3: '스프레드시트',
        page8_3_1: '스프레드시트로 단어장을 만들어 여러가지 형태로 학습하세요!',
        page8_4: '멀티플 윈도우',
        page8_4_1: '실시간 연동되는 멀티플 윈도우 기능으로 다른 학습 내용을 참고하며 필기하세요!',
        page8_5: '마크다운',
        page8_5_1: '마크다운으로 마우스 없이 문서를 꾸미세요!',
        page8_6: 'LaTeX',
        page8_6_1: 'LaTeX으로 복잡한 수식을 편하게 넣으세요!',
        page8_7: '학습 내용 지정',
        page8_7_1:'간편하게 학습 내용을 지정하세요!',
        page8_8: '학습 촉진 도구',
        page8_8_1: '집중력 음악, 뽀모도로 학습법 모두 프로그램 안에 있어요!',
        page8_9: '트리 뭉치기',
        page8_9_1:'트리구조 노트에 최적화된 방식으로 문제가 생성돼요!',
        top1: '커뮤니티',
        top2: '도움말',
        last1: '주소.',
        last2: '서울특별시 동대문구 서울시립대로 117, 403호(02557)',
        last3: '서울시립대로 117, 403호(02557)',
        last4: '사업자등록번호. ',
        last5: '485-06-01987',
        last6: '개인정보 보호정책',
        last7: '이용약관',
        mobile1: '노트가든 모바일 앱 출시',
        mobile2: '이제는 PC로 필기하고 모바일로 암기하세요!'
      }
    },
    en: {
      translation: {
        title: 'Note Garden',
        maincopy1: 'Study different, Let Knowledge Blossom',
        maincopy2: `Note Garden`,
        maincopy3: '',
        subcopy1: 'Just by taking notes, we create an optimized learning course for you to remember for a long time.',
        point1: '1. Write Smart!',
        point2: '2. Learn quickly!',
        point3: '3. Manage with ease!',
        page2_1: '1 Take notes',
        page2_1_1: 'Plant seeds in the garden of knowledge!',
        page2_2: '2 Learn',
        page2_2_1: 'Create courses and learn Smart!',
        page2_3: '3. Manage your knowledge',
        page2_3_1: 'Manage your checklist and current learning status!',
        page3_1: 'This app is ',
        page3_2: 'especially',
        page3_3: 'for...',
        page4_1: 'Programmers',
        page4_1_1: 'People who get in trouble',
        page4_1_2: 'when they forget something',
        page4_2: 'Medical students',
        page4_2_1: 'People who need to understand',
        page4_2_2: 'and memorize vast amounts.',
        page4_3: 'Certification exam',
        page4_3_1: 'People who have to finish learning',
        page4_3_2: 'within a fixed period of time.',
        page4_4: 'Law students',
        page4_4_1: 'People who need to study',
        page4_4_2: 'and retain knowledge for a long time',
        page4_5: 'Language studies',
        page4_5_1: 'People who want to make',
        page4_5_2: 'a good vocabulary book',
        page5_1: 'What makes Note Garden ',
        page5_2: 'different?',
        page5_3: '',
        page6_1: 'You do not have to write everything to memorize',
        page6_1_1: '😀 Automatic learning courses',
        page6_1_2: 'Just take notes and we’ll create a learning courses for you automatically.',
        page6_2: 'Don\'t go through everything to find what you\'ve forgotten!',
        page6_2_1: '😀 SR Algorithm',
        page6_2_2: 'By predicting what you’ve forgot, we offer you a customized course..',
        page6_3: 'Don\'t study with a pile of books!',
        page6_3_1: '😀 Search and Bi-directional linking',
        page6_3_2: 'You can find what you want to learn right away.',
        page6_4: 'Don\'t struggle with complex formulas!',
        page6_4_1: '😀 Easy Formula typing',
        page6_4_2: 'With the advanced formula inputting function, you can enter your formula much more easier.',
        page6_5: 'You don\'t have to use \'covering with your hand\' strategy to memorize!',
        page6_5_1: '😀 Image cloze',
        page6_5_2: 'Using blank creation program, we will make a cloze test for you.',
        page7: '',
        page7_1: 'Additional features',
        page7_2: 'that will make your life easier!',
        page8_1: 'Outliner',
        page8_1_1: 'Helps you organize your learnings more efficiently!',
        page8_2: 'Bi-directional Linking',
        page8_2_1: 'Links between knowledges and creates your own wiki!',
        page8_3: 'Spreadsheet',
        page8_3_1: 'Create a vocabulary book with a spreadsheet and learn in many different forms!',
        page8_4: 'Multiple windows',
        page8_4_1: 'Be free to check and note other references while learning. The remaining data will be updated right away.',
        page8_5: 'Markdown',
        page8_5_1: 'Decorate your documents much more faster with shortcut keys!',
        page8_6: 'LaTeX',
        page8_6_1: 'Easily add complex formulas with LaTeX!',
        page8_7: 'Set learning content',
        page8_7_1:'Easily specify what to learn!',
        page8_8: 'Learning tricks',
        page8_8_1: 'Ambient sound and Pomodoro learning methods are all in the program!',
        page8_9: 'Chunking Nodes',
        page8_9_1: 'Questions are created in a way that is optimized for outliner!',
        top1: 'Community',
        top2: 'Help',
        last1: 'Address.',
        last2: '117 Seoulsiripdae-ro, Dongdaemun-gu, Seoul, Republic of Korea(02557)',
        last3: 'Seoul, Republic of Korea(02557)',
        last4: '',
        last5: '',
        last6: 'Terms of service',
        last7: 'Privacy policy',
        mobile1: 'NOTEGARDEN Mobile App Launched',
        mobile2: 'Now, Study with NOTEGARDEN on Mobile!'
      }
    }
  }

  i18next
    // load translation using http -> see /public/locales (i.e. https://github.com/i18next/react-i18next/tree/master/example/react/public/locales)
    // learn more: https://github.com/i18next/i18next-http-backend
    // want your translations to be loaded from a professional CDN? => https://github.com/locize/react-tutorial#step-2---use-the-locize-cdn
    // .use(Backend)
    // detect user language
    // learn more: https://github.com/i18next/i18next-browser-languageDetector
    .use(LanguageDetector)
    .init({
      resources,
      fallbackLng: 'en',
      // debug: true,
      // lng: 'ko',

      interpolation: {
        escapeValue: false // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
      }
    })

  const localize = locI18next.init(i18next);
  localize('body')

  function getLaungage () {
    if (i18next.languages[0].startsWith('ko')) {
      return 'ko'
    } else {
      return 'en'
    }
  }

  // -----------------------------------------------------------------------------------------------------------

  var isMobile = false; //initiate as false
// device detection
  if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)
    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) {
    isMobile = true;
  }
  var isIOS = false;
  if ((navigator.userAgent.indexOf('iPhone') != -1) || (navigator.userAgent.indexOf('iPod') != -1) || (navigator.userAgent.indexOf('iPad') != -1)) {
    isIOS = true;
  }

  // -----------------------------------------------------------------------------------------------------------

  document.querySelector('.help').addEventListener('click', () => {
    if (getLaungage() === 'ko') {
      window.open('https://app.notegarden.io/#/sharing/FgEfwKP9z6WV9pyNeAuqQNSAhVN2/TImDAf8f_AN0ydN2eV0rh')
    } else {
      window.open('https://app.notegarden.io/#/sharing/FgEfwKP9z6WV9pyNeAuqQNSAhVN2/DPUjzzkl0c76cga8H1zKX')
    }
  })
  document.querySelector('.tos').addEventListener('click', () => {
    if (getLaungage() === 'ko') {
      window.open('https://app.notegarden.io/#/sharing/xw81zReZ97aPL2zQmfBzQiWBpf52/YT6TS4S7sAc2-VPuVm2gZ')
    } else {
      window.open('https://app.notegarden.io/#/sharing/xw81zReZ97aPL2zQmfBzQiWBpf52/VDvhZz1YLy_C8AHmet-UW')
    }
  })
  document.querySelector('.privacy').addEventListener('click', () => {
    if (getLaungage() === 'ko') {
      window.open('https://app.notegarden.io/#/sharing/xw81zReZ97aPL2zQmfBzQiWBpf52/7vDXIfn8wr2NeVEY06CKt')
    } else {
      window.open('https://app.notegarden.io/#/sharing/xw81zReZ97aPL2zQmfBzQiWBpf52/vJseqZmNbkUCRvO64LRjS')
    }
  })

  document.querySelector('.apple').addEventListener('click', () => {
    if (getLaungage() === 'ko') {
      window.open('https://apps.apple.com/kr/app/notegarden/id1598115630')
    } else {
      window.open('https://apps.apple.com/us/app/notegarden/id1598115630')
    }
  })

  document.querySelector('.google').addEventListener('click', () => {
    window.open('https://play.google.com/store/apps/details?id=note.garden')
  })

  // -----------------------------------------------------------------------------------------------------------

  var list
  if (getLaungage() === 'ko') {
    list = document.querySelectorAll('.ko')

  } else {
    list = document.querySelectorAll('.en')
  }


  list.forEach((element) => {
    element.classList.add('displayInline')
  })

  document.querySelectorAll('.webVersion').forEach((element) => {
    element.addEventListener('click', () => {
      window.open('https://app.notegarden.io')
      window.analytics.track('WebVersion Opened')
    })
  })
  document.querySelectorAll('.download').forEach((element) => {
    element.addEventListener('click', () => {
      window.analytics.track('DesktopVersion Downloaded')
      if (!isMobile) {
        window.open('https://dl.todesktop.com/200122yr0mt2j5i')
      } else {
        if (isIOS) {
          if (getLaungage() === 'ko') {
            window.open('https://apps.apple.com/kr/app/notegarden/id1598115630')
          } else {
            window.open('https://apps.apple.com/us/app/notegarden/id1598115630')
          }
        } else {
          window.open('https://play.google.com/store/apps/details?id=note.garden')
        }
      }
    })
  })

  var triggerTabList = [].slice.call(document.querySelectorAll('#myTab a'))
  triggerTabList.forEach(function (triggerEl) {
    var tabTrigger = new bootstrap.Tab(triggerEl)

    triggerEl.addEventListener('click', function (event) {
      event.preventDefault()
      tabTrigger.show()
    })
  })

// -----------------------------------------------------------------------------------------------------------


// alert('2')

// -----------------------------------------------------------------------------------------------------------


}());
