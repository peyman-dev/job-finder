import { BadgeCheck, Briefcase, Building2, CloudUpload, ScanSearch, UserRoundPlus, UsersRound } from "lucide-react";
import { HowItWorkStepType, PopularVacancy } from "../types/types";

export const features = [
    {
        id: crypto.randomUUID(),
        title: 'موقعیت شغلی',
        value: 176_425,
        icon: <Briefcase className="size-8" />
    },
    {
        id: crypto.randomUUID(),
        title: 'شرکت',
        value: 176_425,
        icon: <Building2 className="!size-8" />
    },
    {
        id: crypto.randomUUID(),
        title: 'مصاحبه انجام شده',
        value: 39_495,
        icon: <UsersRound className="size-8" />
    },
    {
        id: crypto.randomUUID(),
        title: 'شغل جدید',
        value: 4948,
        icon: <Briefcase />
    }
]




export const popularVacancies: PopularVacancy[] = [
    { title: "متخصص بیهوشی", value: 45904 },
    { title: "جراح", value: 50364 },
    { title: "متخصص زنان و زایمان", value: 4339 },
    { title: "متخصص ارتوپدی", value: 20079 },
    { title: "جراح فک و صورت", value: 74875 },
    { title: "توسعه‌دهنده نرم‌افزار", value: 43355 },
    { title: "روانپزشک", value: 18598 },
    { title: "دانشمند داده", value: 28200 },
    { title: "مدیر مالی", value: 61391 },
    { title: "تحلیلگر مدیریت", value: 93046 },
    { title: "مدیر فناوری اطلاعات", value: 50963 },
    { title: "تحلیلگر تحقیقات عملیاتی", value: 16827 },
];

export const howItWorksSteps: HowItWorkStepType[] = [
    { title: "ایجاد حساب کاربری", description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ.", icon: <UserRoundPlus />},
    { title: "بارگذاری رزومه/سی‌وی", description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ.", icon: <CloudUpload /> },
    { title: "یافتن شغل مناسب", description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ.", icon: <ScanSearch /> },
    { title: "درخواست شغل", description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ.", icon: <BadgeCheck /> },
  ];