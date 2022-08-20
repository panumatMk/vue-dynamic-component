export interface Page {
    pageId?: number;
    pageName?: string;
    questions?: Questions[];
}

export interface Questions {
    questionId: number;
    questionTitle: string;
    answer: Answer;
}

export interface Answer {
    answerType?: string;
    placeholder?: string;
    value?: string;
    choices?: string[];
}

export const rawData: Page = {
    "pageId": 1,
    "pageName": "page1",
    "questions": [
        {
            "questionId": 1,
            "questionTitle": "Input",
            "answer": {
                "answerType": "text",
                "placeholder": "Input",
                "value": "Test Input"
            }
        },
        {
            "questionId": 2,
            "questionTitle": "Check Box",
            "answer": {
                "answerType": "checkbox",
                "choices": [
                    "item1",
                    "item2",
                    "item3"
                ]
            }
        }
    ]
};
