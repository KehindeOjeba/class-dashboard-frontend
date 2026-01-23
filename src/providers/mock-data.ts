import {Subject} from "@/types";

export const MOCK_SUBJECTS: Subject[] = [] =  [
    {
        id: 1,
        code: 'CS101',
        name: 'Introduction to Computer Science',
        department: 'CS',
        description: 'An introductory course covers basic things in Computer',
        created_at: 'new Date().toISOString()'
    },
    {
        id: 2,
        code: 'MTH101',
        name: 'Introduction to Mathematics',
        department: 'Math',
        description: 'An introductory course covers basic things in Computer',
        created_at: 'new Date().toISOString()'
    },
    {
        id: 3,
        code: 'ENG101',
        name: 'Introduction to Engineering',
        department: 'ENG',
        description: 'An introductory course covers basic things in Computer',
        created_at: 'new Date().toISOString()'
    },
]