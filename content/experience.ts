export const TODO_COMPANY = "TODO_COMPANY";
export const TODO_ROLE = "TODO_ROLE";
export const TODO_DATES = "TODO_DATES";
export const TODO_BULLET = "TODO_BULLET";

export type Experience = {
  role: string;
  company: string;
  dates: string;
  bullets: string[];
};

export const experience: Experience[] = [
  {
    role: TODO_ROLE,
    company: TODO_COMPANY,
    dates: TODO_DATES,
    bullets: [TODO_BULLET, TODO_BULLET, TODO_BULLET],
  },
  {
    role: TODO_ROLE,
    company: TODO_COMPANY,
    dates: TODO_DATES,
    bullets: [TODO_BULLET, TODO_BULLET],
  },
];
