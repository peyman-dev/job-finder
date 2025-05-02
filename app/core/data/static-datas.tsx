import { Briefcase, Building2, UsersRound } from "lucide-react";
import { PopularVacancy } from "../types/types";

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