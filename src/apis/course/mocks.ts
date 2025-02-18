import { ICourseMessageResponse, IAiCourseResponse } from "./types"

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

  export const sampleAiCourseResponse: IAiCourseResponse = {
    httpStatus: "200",
    code: "SUCCESS",
    message: "성공적으로 조회되었습니다",
    result: {
      roomName: "인천 여행 코스",
      totalRoomMember: 4,
      startDate: "2024-03-20",
      dailyItineraries: [
        {
          day: "1",
          places: [
            // {
            //   id: 1,
            //   placeName: "집",
            //   address: "인천광역시",
            //   latitude: 37.455306,
            //   longitude: 126.718513,
            //   image: "https://example.com/home.jpg",
            //   description: "출발 장소",
            //   userName: "사용자1",
            //   profileImage: "https://example.com/profile1.jpg"
            // },
            // {
            //   id: 2,
            //   placeName: "로데오",
            //   address: "인천광역시 부평구",
            //   latitude: 37.443833,
            //   longitude: 126.700731,
            //   image: "https://example.com/rodeo.jpg",
            //   description: "부평 로데오거리",
            //   userName: "사용자1",
            //   profileImage: "https://example.com/profile1.jpg"
            // },
            // {
            //   id: 3,
            //   placeName: "수봉공원",
            //   address: "인천광역시 미추홀구",
            //   latitude: 37.4597895,
            //   longitude: 126.661385,
            //   image: "https://example.com/subong.jpg",
            //   description: "수봉공원 산책",
            //   userName: "사용자1",
            //   profileImage: "https://example.com/profile1.jpg"
            // },
            // {
            //   id: 4,
            //   placeName: "학교",
            //   address: "인천광역시 미추홀구",
            //   latitude: 37.450978,
            //   longitude: 126.655127,
            //   image: "https://example.com/school.jpg",
            //   description: "인하대학교",
            //   userName: "사용자1",
            //   profileImage: "https://example.com/profile1.jpg"
            // },
            // {
            //   id: 6,
            //   placeName: "용현시장",
            //   address: "인천광역시 미추홀구",
            //   latitude: 37.4582361,
            //   longitude: 126.6527648,
            //   image: "https://example.com/market.jpg",
            //   description: "전통시장",
            //   userName: "사용자1",
            //   profileImage: "https://example.com/profile1.jpg"
            // },
            // {
            //   id: 7,
            //   placeName: "차이나타운",
            //   address: "인천광역시 중구",
            //   latitude: 37.475589,
            //   longitude: 126.6178849,
            //   image: "https://example.com/chinatown.jpg",
            //   description: "인천 차이나타운",
            //   userName: "사용자1",
            //   profileImage: "https://example.com/profile1.jpg"
            // },
            // {
            //   id: 8,
            //   placeName: "월미도",
            //   address: "인천광역시 중구",
            //   latitude: 37.4713635,
            //   longitude: 126.5962858,
            //   image: "https://example.com/wolmido.jpg",
            //   description: "월미도 관광",
            //   userName: "사용자1",
            //   profileImage: "https://example.com/profile1.jpg"
            // }
          ]
        },
        {
          day: "2",
          places: [
            {
              id: 5,
              placeName: "학교",
              address: "인천광역시 미추홀구",
              latitude: 37.450978,
              longitude: 126.655127,
              image: "https://example.com/school.jpg",
              description: "인하대학교",
              userName: "사용자2",
              profileImage: "https://example.com/profile2.jpg"
            },
            {
              id: 6,
              placeName: "용현시장",
              address: "인천광역시 미추홀구",
              latitude: 37.4582361,
              longitude: 126.6527648,
              image: "https://example.com/market.jpg",
              description: "전통시장",
              userName: "사용자2",
              profileImage: "https://example.com/profile2.jpg"
            },
            {
              id: 7,
              placeName: "차이나타운",
              address: "인천광역시 중구",
              latitude: 37.475589,
              longitude: 126.6178849,
              image: "https://example.com/chinatown.jpg",
              description: "인천 차이나타운",
              userName: "사용자2",
              profileImage: "https://example.com/profile2.jpg"
            },
            {
              id: 8,
              placeName: "월미도",
              address: "인천광역시 중구",
              latitude: 37.4713635,
              longitude: 126.5962858,
              image: "https://example.com/wolmido.jpg",
              description: "월미도 관광",
              userName: "사용자2",
              profileImage: "https://example.com/profile2.jpg"
            }
          ]
        },
        {
          day: "3",
          places: [
            {
              id: 5,
              placeName: "학교",
              address: "인천광역시 미추홀구",
              latitude: 37.450978,
              longitude: 126.655127,
              image: "https://example.com/school.jpg",
              description: "인하대학교",
              userName: "사용자3",
              profileImage: "https://example.com/profile3.jpg"
            },
            {
              id: 6,
              placeName: "용현시장",
              address: "인천광역시 미추홀구",
              latitude: 37.4582361,
              longitude: 126.6527648,
              image: "https://example.com/market.jpg",
              description: "전통시장",
              userName: "사용자3",
              profileImage: "https://example.com/profile3.jpg"
            },
            {
              id: 7,
              placeName: "차이나타운",
              address: "인천광역시 중구",
              latitude: 37.475589,
              longitude: 126.6178849,
              image: "https://example.com/chinatown.jpg",
              description: "인천 차이나타운",
              userName: "사용자3",
              profileImage: "https://example.com/profile3.jpg"
            },
            {
              id: 8,
              placeName: "월미도",
              address: "인천광역시 중구",
              latitude: 37.4713635,
              longitude: 126.5962858,
              image: "https://example.com/wolmido.jpg",
              description: "월미도 관광",
              userName: "사용자3",
              profileImage: "https://example.com/profile3.jpg"
            }
          ]
        }
      ]
    }
  };