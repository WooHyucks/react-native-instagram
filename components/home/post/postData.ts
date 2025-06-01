import postImage from "@/assets/images/post/post_card_img.jpg";
import profileImage from "@/assets/images/post/profell.png";

export interface PostData {
  id: string;
  user: {
    name: string;
    profileImage: any;
  };
  createdAt: string;
  postImage: any;
  content: string;
  tags: string[];
}

const postData: PostData[] = [
  {
    id: "1",
    user: {
      name: "김철수",
      profileImage: profileImage,
    },
    createdAt: "2025-05-31 14:20",
    postImage: postImage,
    content: "오늘은 날씨가 너무 좋아서 근처 공원에서 산책했어요. 기분 최고!",
    tags: ["산책", "일상", "자연"],
  },
  {
    id: "2",
    user: {
      name: "이영희",
      profileImage: profileImage,
    },
    createdAt: "2025-05-30 19:10",
    postImage: postImage,
    content: "카페에서 혼자 책 읽으며 조용한 시간을 보내는 게 제 힐링이에요.",
    tags: ["카페", "책", "혼자만의시간"],
  },
  {
    id: "3",
    user: {
      name: "박민수",
      profileImage: profileImage,
    },
    createdAt: "2025-05-29 09:45",
    postImage: postImage,
    content: "오랜만에 친구들과 맛있는 저녁! 이런 시간 너무 소중해요.",
    tags: ["친구", "맛집", "즐거운시간"],
  },
  {
    id: "4",
    user: {
      name: "최수정",
      profileImage: profileImage,
    },
    createdAt: "2025-05-28 22:05",
    postImage: postImage,
    content: "밤하늘 보면서 이런저런 생각. 오늘 하루도 수고했어요 우리 모두!",
    tags: ["밤산책", "생각정리", "하루끝"],
  },
];

export default postData;
