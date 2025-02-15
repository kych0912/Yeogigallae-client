export const courseInfoMock = {
    "httpStatus": "OK",
    "code": "VOTE_202",
    "message": "여행 정보 조회에 성공하였습니다.",
    "result": {
      "location": "경기도 부천시 역곡동 45-18",
      "description": "관광 명소 방문 위주로 진행 예정",
      "imageUrl": "https://yeogigallae.s3.ap-southeast-2.amazonaws.com/uploads/building_image3.jpg",
      
      "customLocation": "제주시",
      "price": "20만원",
      "minDays": 3,
      "maxDays": 7,
      "month": 2,
  
      "roomName": "여행가보자고",
      "userCount": 5,
      "userName": "고민균",
  
      "masterName": "곰구마",
      "voteLimitTime": "THIRTY_MINUTES",
      "startDate": "2025-02-01",
      "endDate": "2025-02-07"
    }
  }

  export const courseListMock = {
    httpStatus: "OK",
    code: "VOTE_202",
    message: "여행 정보 조회에 성공하였습니다.",
    result: [{
    placeid:"1",
    name:"규리",
    avatar:"https://picsum.photos/200/300",
    image:"https://picsum.photos/200/300",
    content:"안녕하세요 코스짜기 시작했습니다.",
    place:"전북특별자치도 전주시 완산구 기린대로 99",
    link:"https://picsum.photos/200/300",
    isMine:true,
    },{
    placeid:"2",
    name:"규리",
    avatar:"https://picsum.photos/200/300",
    image:"https://picsum.photos/200/300",
    content:"안녕하세요 코스짜기 시작했습니다.",
    place:"전북특별자치도 전주시 완산구 기린대로 99",
    link:"https://picsum.photos/200/300",
    isMine:false,
    }]
  }
