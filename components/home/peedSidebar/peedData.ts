import peedImg from '@/assets/images/peed/peed_test_img.jpeg';

export interface PeedData {
    name: string;
    image: string;
    link: any;
}

export const peedData: PeedData[] = [
    { name: '김철수', image: peedImg, link: '/profile/kim_cheolsu' },
    { name: '이영희', image: peedImg, link: '/profile/lee_younghee' },
    { name: '박민수', image: peedImg, link: '/profile/park_minsu' },
    { name: '최수정', image: peedImg, link: '/profile/choi_sujeong' },
    { name: '정지훈', image: peedImg, link: '/profile/jung_jihun' },
    { name: '한가영', image: peedImg, link: '/profile/han_gayeong' },
    { name: '오준호', image: peedImg, link: '/profile/oh_junho' },
    { name: '신혜진', image: peedImg, link: '/profile/shin_hyejin' },
    { name: '유지호', image: peedImg, link: '/profile/yu_jiho' },
    { name: '장미영', image: peedImg, link: '/profile/jang_miyoung' },
];

export default peedData;
