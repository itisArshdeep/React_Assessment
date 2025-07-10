// project screenshots 
import p1 from '../images/projectImg/p1.png';
import p2 from '../images/projectImg/p2.png';
import p3 from '../images/projectImg/p3.png';
import p4 from '../images/projectImg/p4.png';
import p5 from '../images/projectImg/p5.png';
import p6 from '../images/projectImg/p6.png';

// interface
export interface Project {
  p_no: number;
  p_name: string;
  p_img: string;
}

const projects: Project[] = [
  {
    p_no: 1,
    p_name: "Qcs Studio's website",
    p_img: p1,
  },
  {
    p_no: 2,
    p_name: "Qcs Studio's website",
    p_img: p2,
  },
  {
    p_no: 3,
    p_name: "Qcs Studio's website",
    p_img: p3,
  },
  {
    p_no: 4,
    p_name: "Qcs Studio's website",
    p_img: p4,
  },
  {
    p_no: 5,
    p_name: "Qcs Studio's website",
    p_img: p5,
  },
  {
    p_no: 6,
    p_name: "Qcs Studio's website",
    p_img: p6,
  },
];

export default projects;
