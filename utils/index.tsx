import {
  GlobeAltIcon,
  LightningBoltIcon,
  ScaleIcon,
} from "@heroicons/react/outline";

export const navigation = [
  { name: "Home", href: "/", current: true },
  { name: "About Us", href: "/about", current: false },
  { name: "Academics", href: "/academics", current: false },
  { name: "Students", href: "/students", current: false },
  { name: "Facilities", href: "/facilities", current: false },
  { name: "Contact", href: "/contact", current: false },
];

export const features = [
  {
    name: "Primary Years",
    description:
      "Life School Ghana offers Primary Years Program from Nursery through Year 6. The programme  focuses  on developing children to be inquirers in the classroom and in the outside world.",
  },
  {
    name: "Twi Lessons for Adults",
    description:
      " Life School Ghana offers Twi lessons for adults with little or no Twi experience and young beginners. The programme  focuses  on conversational skills. Lessons are organized in a very interactive way and students are engaged with activities such as simple Twi songs and stories.",
  },
  {
    name: "English Lessons For Adults",
    description:
      "Life School Ghana offers English lessons for adults with little or no English experience and young beginners. The programme  focuses  on conversational skills. Lessons are organized in a very interactive way and students are engaged with activities such as simple English songs and stories. ",
  },
];

export function Copyright() {
  return (
    <div className="text-center p-6 bg-gray-900">
      <span>Copyright © Life School Ghana </span>
      <a className="text-gray-400 font-semibold" href="https://lifeschool.com/">
        {new Date().getFullYear()}
      </a>
    </div>
  );
}

export const about = [
  {
    name: "Global Curriculum",
    description:
      "Life School Ghana adopts a balanced and broad deep subject learning based on Ghana and UK curriculums but transcends their traditional boundaries.",
    icon: GlobeAltIcon,
  },
  {
    name: "No hidden fees",
    description:
      "Registration and tuition fee is a one time non refundable which must be paid in full in full at the time of admission.",
    icon: ScaleIcon,
  },
];

export const academics = [
  {
    name: "Primary Years",
    description:
      "Life School Ghana offers Primary Years Program from Nursery through Year 6. The programme  focuses  on developing children to be inquirers in the classroom and in the outside world. ",
    icon: GlobeAltIcon,
  },
  {
    name: "Twi Lessons For Adults",
    description:
      "Life School Ghana offers Twi lessons for adults with little or no Twi experience and young beginners. The programme  focuses  on conversational skills. Lessons are organized in a very interactive way and students are engaged with activities such as simple Twi songs and stories. ",
    icon: ScaleIcon,
  },
  {
    name: "English Lessons For Adults",
    description:
      "Life School Ghana offers English lessons for adults with little or no English experience and young beginners. The programme  focuses  on conversational skills. Lessons are organized in a very interactive way and students are engaged with activities such as simple English songs and stories. ",
    icon: LightningBoltIcon,
  },
];

export const students = [
  {
    href: "#",
    imageSrc:
      "https://res.cloudinary.com/deyudesls/image/upload/c_pad,h_600,q_auto,w_450/v1643034961/samples/people/52D785CE-5CE3-4FBB-A328-CC41C90F1CF7_aszdvg.webp",
    imageAlt: "student image",

    color: "Ghanaian",
  },
  {
    href: "#",
    imageSrc:
      "https://res.cloudinary.com/deyudesls/image/upload/c_pad,h_600,q_auto,w_450/v1643034961/samples/people/29C56FAB-8003-4962-B5FC-7BF53193019D_dbkljh.webp",
    imageAlt: "student image",

    color: "Ghanaian",
  },
  {
    href: "#",
    imageSrc:
      "https://res.cloudinary.com/deyudesls/image/upload/c_pad,h_600,q_auto,w_450/v1643034960/samples/people/D0D2740B-A6C6-4D37-859A-C931A26E2EBF_s1g8yi.webp",
    imageAlt: "student image",

    color: "Ghanaian",
  },
  {
    href: "#",
    imageSrc:
      "https://res.cloudinary.com/deyudesls/image/upload/c_pad,h_600,q_auto,w_450/v1643034961/samples/people/16DA1B4C-1DC7-4FB4-BA9B-0C247F6074C1_ll8qac.webp",
    imageAlt: "student image",

    color: "Ghanaian",
  },
  {
    href: "#",
    imageSrc:
      "https://res.cloudinary.com/deyudesls/image/upload/c_pad,h_600,q_auto,w_450/v1643034960/samples/people/61E056EE-6126-4C79-B711-B49A2A408129_edki4n.webp",
    imageAlt: "student image",

    color: "Ghanaian",
  },
  {
    href: "#",
    imageSrc:
      "https://res.cloudinary.com/deyudesls/image/upload/c_pad,h_600,q_auto,w_450/v1643034960/samples/people/E5DB9F77-E216-40B1-A1C6-1229AD369EB6_la6ewg.webp",
    imageAlt: "student image",
  },

  {
    href: "#",
    imageSrc:
      "https://res.cloudinary.com/deyudesls/image/upload/c_pad,h_600,q_auto,w_450/v1643034960/samples/people/AED1C557-216E-4820-99A2-4721CF6ABF03_zjpkho.webp",
    imageAlt: "student image",
  },
  {
    href: "#",
    imageSrc:
      "https://res.cloudinary.com/deyudesls/image/upload/c_pad,h_600,q_auto,w_450/v1643034960/samples/people/F6DE69E7-1717-4CCF-B4C0-3FF7C9DCB4BB_a32asv.webp",
    imageAlt: "student image",
  },
  {
    href: "#",
    imageSrc:
      "https://res.cloudinary.com/deyudesls/image/upload/c_pad,h_600,q_auto,w_450/v1643034960/samples/people/72FD0090-790F-461F-8784-DE686185492F_qncx9x.webp",
    imageAlt: "student image",
  },
  {
    href: "#",
    imageSrc:
      "https://res.cloudinary.com/deyudesls/image/upload/c_pad,h_600,q_auto,w_450/v1643034960/samples/people/A8F8A7D0-03F8-4360-B17F-A79CBE5E59B6_vuoesf.webp",
    imageAlt: "student image",
  },
  {
    href: "#",
    imageSrc:
      "https://res.cloudinary.com/deyudesls/image/upload/c_pad,h_600,q_auto,w_450/v1643034959/samples/people/189BD548-2F3C-4C1C-8F71-1E27E6EE7825_wyak5k.webp",
    imageAlt: "student image",
  },
  {
    href: "#",
    imageSrc:
      "https://res.cloudinary.com/deyudesls/image/upload/c_pad,h_600,q_auto,w_450/v1643034958/samples/people/AD691B66-2238-4E9B-9369-62D077DF37B1_i4gecn.webp",
    imageAlt: "student image",
  },
  {
    href: "#",
    imageSrc:
      "https://res.cloudinary.com/deyudesls/image/upload/c_pad,h_600,q_auto,w_450/v1643034958/samples/people/CFA26AD7-FF42-4274-B170-06B20876664C_lffrdj.webp",
    imageAlt: "student image",
  },
  {
    href: "#",
    imageSrc:
      "https://res.cloudinary.com/deyudesls/image/upload/c_pad,h_600,q_auto,w_450/v1643034958/samples/people/AFDB5F9D-EB43-4177-8CE6-28E6C4E1899D_r3fjyz.webp",
    imageAlt: "student image",
  },
  {
    href: "#",
    imageSrc:
      "https://res.cloudinary.com/deyudesls/image/upload/c_pad,h_600,q_auto,w_450/v1643034958/samples/people/47FABC3C-40FC-4393-8FC5-4098AC517613_wdmhas.webp",
    imageAlt: "student image",
  },
  {
    href: "#",
    imageSrc:
      "https://res.cloudinary.com/deyudesls/image/upload/c_pad,h_600,q_auto,w_450/v1643034958/samples/people/47FABC3C-40FC-4393-8FC5-4098AC517613_wdmhas.webp",
    imageAlt: "student image",
  },

  {
    href: "#",
    imageSrc:
      "https://res.cloudinary.com/deyudesls/image/upload/c_pad,h_600,q_auto,w_450/v1643034958/samples/people/D7AAE9AF-54D0-4CD1-81B0-FEA0DFF1C958_k593ks.webp",
    imageAlt: "student image",
  },
  {
    href: "#",
    imageSrc:
      "https://res.cloudinary.com/deyudesls/image/upload/c_pad,h_600,q_auto,w_450/v1643034957/samples/people/72359897-1A22-46D4-9277-87161880F8E6_jzwb92.webp",
    imageAlt: "student image",
  },
  {
    href: "#",
    imageSrc:
      "https://res.cloudinary.com/deyudesls/image/upload/c_pad,h_600,q_auto,w_450/v1643034957/samples/people/DE6088BD-A42D-4C57-B67D-79F84D6FD754_fessqi.webp",
    imageAlt: "student image",
  },
  {
    href: "#",
    imageSrc:
      "https://res.cloudinary.com/deyudesls/image/upload/c_pad,h_600,q_auto,w_450/v1643034957/samples/people/762F9EE7-73E2-4D1A-8E02-FF536F5ED092_mrhsol.webp",
    imageAlt: "student image",
  },
  {
    href: "#",
    imageSrc:
      "https://res.cloudinary.com/deyudesls/image/upload/c_pad,h_600,q_auto,w_450/v1643034957/samples/people/8474C903-8F19-4115-9267-1EBB00150329_jcxrym.webp",
    imageAlt: "student image",
  },
  {
    href: "#",
    imageSrc:
      "https://res.cloudinary.com/deyudesls/image/upload/c_pad,h_600,q_auto,w_450/v1643034957/samples/people/63DEF4C1-54A6-4F97-ABFF-FCD45EB823C5_norjiu.webp",
    imageAlt: "student image",
  },
  {
    href: "#",
    imageSrc:
      "https://res.cloudinary.com/deyudesls/image/upload/c_pad,h_600,q_auto,w_450/v1643034956/samples/people/69599A82-C543-46D9-BF14-24E23F3E9807_srec6j.webp",
    imageAlt: "student image",
  },
  {
    href: "#",
    imageSrc:
      "https://res.cloudinary.com/deyudesls/image/upload/c_pad,h_600,q_auto,w_450/v1643034956/samples/people/6E35B045-E3BC-4E1C-8865-18F0B877FCD0_htcgq4.webp",
    imageAlt: "student image",
  },
  {
    href: "#",
    imageSrc:
      "https://res.cloudinary.com/deyudesls/image/upload/c_pad,h_600,q_auto,w_450/v1643034956/samples/people/D7194E49-9CA5-44EA-8A21-64BD77B93474_lyxg9l.webp",
    imageAlt: "student image",
  },
  {
    href: "#",
    imageSrc:
      "https://res.cloudinary.com/deyudesls/image/upload/c_pad,h_600,q_auto,w_450/v1643034956/samples/people/7ECF6430-FA5A-4619-B7AD-C362839E3403_vo9jgj.webp",
    imageAlt: "student image",
  },
  {
    href: "#",
    imageSrc:
      "https://res.cloudinary.com/deyudesls/image/upload/c_pad,h_600,q_auto,w_450/v1643034955/samples/people/2E741CBD-1DDA-4DCF-A584-5ADBE9C84362_xigavm.webp",
    imageAlt: "student image",
  },
  {
    href: "#",
    imageSrc:
      "https://res.cloudinary.com/deyudesls/image/upload/c_pad,h_600,q_auto,w_450/v1643034955/samples/people/7373B615-B29E-4114-AD5D-AC0D1E03B8C0_kmmwcn.webp",
    imageAlt: "student image",
  },
  {
    href: "#",
    imageSrc:
      "https://res.cloudinary.com/deyudesls/image/upload/c_pad,h_600,q_auto,w_450/v1643034955/samples/people/B46D3DB9-19A3-41AD-8B50-6C6EF38A74B6_u6bjix.webp",
    imageAlt: "student image",
  },
  {
    href: "#",
    imageSrc:
      "https://res.cloudinary.com/deyudesls/image/upload/c_pad,h_600,q_auto,w_450/v1643034955/samples/people/BF220B29-BA24-4B7C-ACD7-2F37879EF829_dlkfiv.webp",
    imageAlt: "student image",
  },
  {
    href: "#",
    imageSrc:
      "https://res.cloudinary.com/deyudesls/image/upload/c_pad,h_600,q_auto,w_450/v1643034955/samples/people/076F3C25-F20B-476F-9D31-C80EFA2CF135_w6dgpj.webp",
    imageAlt: "student image",
  },
  {
    href: "#",
    imageSrc:
      "https://res.cloudinary.com/deyudesls/image/upload/c_pad,h_600,q_auto,w_450/v1643034954/samples/people/32DAA3C9-58D2-4776-8679-3717C4A0A9F8_ioi7qf.webp",
    imageAlt: "student image",
  },
];

export const facilities = [
  {
    href: "#",
    imageSrc:
      "https://res.cloudinary.com/deyudesls/image/upload/c_pad,h_600,q_auto,w_450/v1643034961/samples/people/16DA1B4C-1DC7-4FB4-BA9B-0C247F6074C1_ll8qac.jpg",
    imageAlt: "facility image",
  },

  {
    href: "#",
    imageSrc:
      "https://res.cloudinary.com/deyudesls/image/upload/c_pad,h_600,q_auto,w_450/v1643034960/samples/people/D0D2740B-A6C6-4D37-859A-C931A26E2EBF_s1g8yi.jpg",
    imageAlt: "facility image",
  },
  {
    href: "#",
    imageSrc:
      "https://res.cloudinary.com/deyudesls/image/upload/c_pad,h_600,q_auto,w_450/v1643034959/samples/people/F26E111A-D7F4-468B-9A27-A0D24AAD22D7_duzlk9.jpg",
    imageAlt: "facility image",
  },
  {
    href: "#",
    imageSrc:
      "https://res.cloudinary.com/deyudesls/image/upload/c_pad,h_600,q_auto,w_450/v1643034959/samples/people/5BD9D2B5-1CBC-42D1-AFD6-B8E29F04998B_ndqi6f.jpg",
    imageAlt: "facility image",
  },
  {
    href: "#",
    imageSrc:
      "https://res.cloudinary.com/deyudesls/image/upload/c_pad,h_600,q_auto,w_450/v1643034959/samples/people/ED22AADD-069E-46BC-A586-205F5F8C65B6_z4dlqy.jpg",
    imageAlt: "facility image",
  },
  {
    href: "#",
    imageSrc:
      "https://res.cloudinary.com/deyudesls/image/upload/c_pad,h_600,q_auto,w_450/v1643034959/samples/people/F705F6EF-8F86-4EE1-8293-8A50BD5048EB_gy7kyh.jpg",
    imageAlt: "facility image",
  },
  {
    href: "#",
    imageSrc:
      "https://res.cloudinary.com/deyudesls/image/upload/c_pad,h_600,q_auto,w_450/v1643034959/samples/people/3C9AFE04-0597-4250-B60F-99C4EC1A04D8_zy70jm.jpg",
    imageAlt: "facility image",
  },
  {
    href: "#",
    imageSrc:
      "https://res.cloudinary.com/deyudesls/image/upload/c_pad,h_600,q_auto,w_450/v1643034959/samples/people/4F756DA3-F98F-4140-B47A-9E140985FA58_znu9z6.jpg",
    imageAlt: "facility image",
  },
  {
    href: "#",
    imageSrc:
      "https://res.cloudinary.com/deyudesls/image/upload/c_pad,h_600,q_auto,w_450/v1643034958/samples/people/11864625-DA2F-4078-B6D8-1AC3D6AC6D1C_xxnmyt.jpg",
    imageAlt: "facility image",
  },
  {
    href: "#",
    imageSrc:
      "https://res.cloudinary.com/deyudesls/image/upload/c_pad,h_600,q_auto,w_450/v1643034958/samples/people/AD691B66-2238-4E9B-9369-62D077DF37B1_i4gecn.jpg",
    imageAlt: "facility image",
  },
  {
    href: "#",
    imageSrc:
      "https://res.cloudinary.com/deyudesls/image/upload/c_pad,h_600,q_auto,w_450/v1643034958/samples/people/CE37A377-157A-481D-9C5B-4B4C4F09C43F_al2f5d.jpg",
    imageAlt: "facility image",
  },
  {
    href: "#",
    imageSrc:
      "https://res.cloudinary.com/deyudesls/image/upload/c_pad,h_600,q_auto,w_450/v1643034958/samples/people/D7AAE9AF-54D0-4CD1-81B0-FEA0DFF1C958_k593ks.jpg",
    imageAlt: "facility image",
  },
  {
    href: "#",
    imageSrc:
      "https://res.cloudinary.com/deyudesls/image/upload/c_pad,h_600,q_auto,w_450/v1643034956/samples/people/6E35B045-E3BC-4E1C-8865-18F0B877FCD0_htcgq4.jpg",
    imageAlt: "facility image",
  },
  {
    href: "#",
    imageSrc:
      "https://res.cloudinary.com/deyudesls/image/upload/c_pad,h_600,q_auto,w_450/v1643034955/samples/people/B46D3DB9-19A3-41AD-8B50-6C6EF38A74B6_u6bjix.jpg",
    imageAlt: "facility image",
  },
  {
    href: "#",
    imageSrc:
      "https://res.cloudinary.com/deyudesls/image/upload/c_pad,h_600,q_auto,w_450/v1643034955/samples/people/BF220B29-BA24-4B7C-ACD7-2F37879EF829_dlkfiv.jpg",
    imageAlt: "facility image",
  },
  {
    href: "#",
    imageSrc:
      "https://res.cloudinary.com/deyudesls/image/upload/c_pad,h_600,q_auto,w_450/v1643034955/samples/people/AD3BE509-9E39-46CD-A466-F76FFAFADC3F_hlj9ik.jpg",
    imageAlt: "facility image",
  },
  {
    href: "#",
    imageSrc:
      "https://res.cloudinary.com/deyudesls/image/upload/c_pad,h_600,q_auto,w_450/v1643034954/samples/people/32DAA3C9-58D2-4776-8679-3717C4A0A9F8_ioi7qf.jpg",
    imageAlt: "facility image",
  },
];
