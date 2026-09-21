export type Degree = {
  credential: string;
  school: string;
  dates: string;
  note?: string;
};

export type Publication = {
  title: string;
  venue: string;
  year: string;
  url: string;
};

export const education: Degree[] = [
  {
    credential: "MSc in Computer Science (Distinction)",
    school: "University of Greenwich, London, UK",
    dates: "2022 – 2023",
  },
  {
    credential: "BSc in Computer Science and Engineering",
    school: "North South University, Bangladesh",
    dates: "2015 – 2019",
  },
];

export const publication: Publication = {
  title:
    "Forecasting River Sediment Deposition through Satellite Image-Driven Unsupervised Machine Learning Techniques",
  venue: "Remote Sensing Applications: Society and Environment",
  year: "2019",
  url: "https://doi.org/10.1016/j.rsase.2018.12.011",
};
