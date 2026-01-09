// Đề thi môn Security Cloud (NT524) - 10 đề thi
// Mỗi đề có 30 câu hỏi, thời gian 60 phút
// Câu hỏi được trộn từ cả 4 chương

const securityCloudExams = [
    {
        id: 1,
        name: "Đề thi Security Cloud số 1",
        description: "Đề thi tổng hợp kiến thức Security Cloud - NT524 (Chương 1-4)",
        timeLimit: 60, // phút
        questionIndices: [0, 5, 10, 15, 20, 25, 30, 33, 38, 43, 48, 53, 58, 63, 66, 71, 76, 81, 86, 91, 96, 100, 105, 110, 115, 120, 125, 130, 135, 140]
    },
    {
        id: 2,
        name: "Đề thi Security Cloud số 2",
        description: "Đề thi tổng hợp kiến thức Security Cloud - NT524 (Chương 1-4)",
        timeLimit: 60,
        questionIndices: [1, 6, 11, 16, 21, 26, 31, 34, 39, 44, 49, 54, 59, 64, 67, 72, 77, 82, 87, 92, 97, 101, 106, 111, 116, 121, 126, 131, 136, 141]
    },
    {
        id: 3,
        name: "Đề thi Security Cloud số 3",
        description: "Đề thi tổng hợp kiến thức Security Cloud - NT524 (Chương 1-4)",
        timeLimit: 60,
        questionIndices: [2, 7, 12, 17, 22, 27, 32, 35, 40, 45, 50, 55, 60, 65, 68, 73, 78, 83, 88, 93, 98, 102, 107, 112, 117, 122, 127, 132, 137, 142]
    },
    {
        id: 4,
        name: "Đề thi Security Cloud số 4",
        description: "Đề thi tổng hợp kiến thức Security Cloud - NT524 (Chương 1-4)",
        timeLimit: 60,
        questionIndices: [3, 8, 13, 18, 23, 28, 33, 36, 41, 46, 51, 56, 61, 66, 69, 74, 79, 84, 89, 94, 99, 103, 108, 113, 118, 123, 128, 133, 138, 143]
    },
    {
        id: 5,
        name: "Đề thi Security Cloud số 5",
        description: "Đề thi tổng hợp kiến thức Security Cloud - NT524 (Chương 1-4)",
        timeLimit: 60,
        questionIndices: [4, 9, 14, 19, 24, 29, 34, 37, 42, 47, 52, 57, 62, 67, 70, 75, 80, 85, 90, 95, 100, 104, 109, 114, 119, 124, 129, 134, 139, 144]
    },
    {
        id: 6,
        name: "Đề thi Security Cloud số 6",
        description: "Đề thi tổng hợp kiến thức Security Cloud - NT524 (Chương 1-4)",
        timeLimit: 60,
        questionIndices: [5, 10, 15, 20, 25, 30, 35, 38, 43, 48, 53, 58, 63, 68, 71, 76, 81, 86, 91, 96, 101, 105, 110, 115, 120, 125, 130, 135, 140, 145]
    },
    {
        id: 7,
        name: "Đề thi Security Cloud số 7",
        description: "Đề thi tổng hợp kiến thức Security Cloud - NT524 (Chương 1-4)",
        timeLimit: 60,
        questionIndices: [6, 11, 16, 21, 26, 31, 36, 39, 44, 49, 54, 59, 64, 69, 72, 77, 82, 87, 92, 97, 102, 106, 111, 116, 121, 126, 131, 136, 141, 146]
    },
    {
        id: 8,
        name: "Đề thi Security Cloud số 8",
        description: "Đề thi tổng hợp kiến thức Security Cloud - NT524 (Chương 1-4)",
        timeLimit: 60,
        questionIndices: [7, 12, 17, 22, 27, 32, 37, 40, 45, 50, 55, 60, 65, 70, 73, 78, 83, 88, 93, 98, 103, 107, 112, 117, 122, 127, 132, 137, 142, 147]
    },
    {
        id: 9,
        name: "Đề thi Security Cloud số 9",
        description: "Đề thi tổng hợp kiến thức Security Cloud - NT524 (Chương 1-4)",
        timeLimit: 60,
        questionIndices: [8, 13, 18, 23, 28, 33, 38, 41, 46, 51, 56, 61, 66, 71, 74, 79, 84, 89, 94, 99, 104, 108, 113, 118, 123, 128, 133, 138, 143, 148]
    },
    {
        id: 10,
        name: "Đề thi Security Cloud số 10",
        description: "Đề thi tổng hợp kiến thức Security Cloud - NT524 (Chương 1-4)",
        timeLimit: 60,
        questionIndices: [9, 14, 19, 24, 29, 34, 39, 42, 47, 52, 57, 62, 67, 72, 75, 80, 85, 90, 95, 100, 105, 109, 114, 119, 124, 129, 134, 139, 144, 149]
    }
];
