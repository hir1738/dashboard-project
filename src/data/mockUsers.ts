import { User } from "../types";
import { mockDataUser1, mockDataUser2 } from "./mockData";

export const mockUsers: User[] = [
  {
    id: "1",
    name: "John Doe",
    role: "Manager",
    data: mockDataUser1,
  },
  {
    id: "2",
    name: "Jane Smith",
    role: "Director",
    data: mockDataUser2,
  },
];
