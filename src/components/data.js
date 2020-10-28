const quiz = [
    {
        num: 1,
        question: "Czyją mamą jest bunia?",
        answers: ["Taty Jędrka", "Mamy Jędrka", "Niczyją"],
        goodOne: "Taty Jędrka"
    },
    {
        num: 2,
        question: "Kim dla Jędrka jest Marcela?",
        answers: ["Siostrą", "Koleżanką", "Kuzynką"],
        goodOne: "Kuzynką"
    },
    {
        num: 3,
        question: "Jak czasem nazywa rodziców Jędrek?",
        answers: ["Mamusia i Tatuś", "Mamina i Padre", "Po imieniu"],
        goodOne: "Mamina i Padre"
    },
    {
        num: 4,
        question: "W jakim mieście nie byli jeszcze Mazurscy?",
        answers: ["Wenecja", "Berlin", "Nowy Jork"],
        goodOne: "Nowy Jork"
    },
    {
        num: 5,
        question: "Jakie rośliny uwielbia bunia?",
        answers: ["Róże", "Kaktusy", "Stokrotki"],
        goodOne: "Kaktusy"
    },
    {
        num: 6,
        question: "Jaką sławną osobę poznali w trzecim tomie Mazurscy?",
        answers: ["Królową Elżbietę", "Stinga", "Jennifer Aniston"],
        goodOne: "Królową Elżbietę"
    },
    {
        num: 7,
        question: "Gdzie został ukryty obraz Porwanie Prozerpiny, w którego posiadanie przypadkiem weszła bunia w drugim tomie serii?",
        answers: ["W samolocie", "W piwnicy", "W parasolce"],
        goodOne: "W parasolce"
    },
    {
        num: 8,
        question: "Czyje plany udaremnili Mazurscy w trzecim tomie?",
        answers: ["Gangu Niewidzialnych", "Złodziei pieniędzy", "Złodziei Samochodów"],
        goodOne: "Gangu Niewidzialnych"
    },
    {
        num: 9,
        question: "W jakim kraju Mazurscy przejechali się pociągiem z filmów o Harrym Potterze?",
        answers: ["W Szkocji", "W Hiszpanii", "W Irlandii"],
        goodOne: "W Szkocji"
    },
    {
        num: 10,
        question: "Jakie imię nadał Jędrek roślince, którą kupił w Padwie?",
        answers: ["Borys", "Rosiczek", "Parszywek"],
        goodOne: "Rosiczek"
    },
    {
        num: 11,
        question: "Jakim środkiem transportu nie podróżowała jeszcze rodzina?",
        answers: ["Rowerem", "Samochodem", "Balonem"],
        goodOne: "Balonem"
    },
    {
        num: 12,
        question: "W jakim mieście Jędrek spotkał po raz pierwszy podejrzanego fakira?",
        answers: ["W Londynie", "W Amsterdamie", "We Frankfurcie"],
        goodOne: "We Frankfurcie"
    },
    {
        num: 13,
        question: "Jakim imieniem Mazurscy nazywają nawigację w swoim samochodzie?",
        answers: ["Marzenka", "Agnieszka", "Alicja"],
        goodOne: "Marzenka"
    },
    {
        num: 14,
        question: "W jakim muzeum bohaterowie oglądali słynny obraz Leonadrda da Vinci Mona Lisa?",
        answers: ["W Muzeum Narodowym", "W Luwrze", "W Musee d’Orsay"],
        goodOne: "W Luwrze"
    },
    {
        num: 15,
        question: "Kto spośród rodziny jest niejadkiem?",
        answers: ["Mama", "Bunia", "Jędrek"],
        goodOne: "Jędrek"
    },
    {
        num: 16,
        question: "Jakim środkiem transportu podróżują najczęściej bohaterowie?",
        answers: ["Rowerem", "Pociągiem", "Samochodem"],
        goodOne: "Samochodem"
    },
    {
        num: 17,
        question: "Jaki bezcenny przedmiot został skradziony w trzecim tomie serii?",
        answers: ["Samochód Mazurskich", "Kamień Przeznaczenia", "Portret Mony Lisy"],
        goodOne: "Kamień Przeznaczenia"
    },
    {
        num: 18,
        question: "Dom jakiego artysty i wynalazcy zwiedzała rodzina w Amboise?",
        answers: ["Leonarda da Vinci", "Michała Anioła", "Rafaela Santi"],
        goodOne: "Leonarda da Vinci"
    },
    {
        num: 19,
        question: "Kto z członków rodziny najczęściej robi sobie selfie?",
        answers: ["Jędrek", "Bunia", "Marcela"],
        goodOne: "Marcela"
    },
    {
        num: 20,
        question: "Jaki polski zamek bohaterowie odwiedzili w pierwszym tomie?",
        answers: ["Buckingham Palace", "Zamek Książ w Wałbrzychu", "Wersal"],
        goodOne: "Zamek Książ w Wałbrzychu"
    }
];

const start = {
    date: "Premiera: 25 listopada 2020 r.",
    inv: `Czy masz ochotę na kolejną przygodę z rodziną Mazurskich? To świetnie! Zapraszamy Cię do podróży. Czy chcesz jako pierwszy dowiedzieć się co spotka Was po drodze?
    Odpowiedz na pytania i odkryj pierwszy rozdział najnowszego tomu „Mazurskich w podróży”`,
    btn: "Gotowy? do dzieła!"
}

const finish = [
    {
        num: 1,
        display: "UPS! Niewiele Ci zabrakło, aby odblokować dostęp do pierwszego rozdziału. Może spróbujesz ponownie?",
        btn: "Spróbuj jeszcze raz"
    },
    {
        num: 2,
        display: "Gratulujemy! Zapraszamy do wspólnej podróży!" ,
        btn: "Przeczytaj rozdział"
    }
]
export default {quiz, start, finish};