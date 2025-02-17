import { ICourseMessageResponse } from "./types"

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

  export const courseListMock:ICourseMessageResponse = {
    httpStatus: "OK",
    code: "VOTE_202",
    message: "여행 정보 조회에 성공하였습니다.",
    result: {
      places:[{
        id:"1",
        placeName:"규리",
        address:"https://picsum.photos/200/300",
        latitude:126.851299,
        longitude:37.494442,
        image:"https://picsum.photos/200/300",
        description:"안녕하세요 코스짜기 시작했습니다.",
        userName:"규리",
        profileImage:"https://picsum.photos/200/300",
        },{
        id:"2",
        placeName:"규리",
        address:"https://picsum.photos/200/300",
        latitude:126.851299,
        longitude:37.494442,
        image:"https://picsum.photos/200/300",
        description:"안녕하세요 코스짜기 시작했습니다.",
        userName:"규리",
        profileImage:"https://picsum.photos/200/300",
      }]
    }
  }
