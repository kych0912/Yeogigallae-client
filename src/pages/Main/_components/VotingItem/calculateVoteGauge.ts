// 투표율 계산 함수
const calculateVoteGauge = (votedParticipants: number, totalParticipants: number): number => {
    if (totalParticipants === 0) return 0;
    return Math.round((votedParticipants / totalParticipants) * 100);
};

export default calculateVoteGauge;
