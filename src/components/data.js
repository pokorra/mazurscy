const quiz = [
    {
        num: 1,
        question: "Czyją mamą jest bunia?",
        answers: [
            {
            num: "a.",
            ans: "Taty Jędrka"}, 
            {
            num: "b.",
            ans: "Mamy Jędrka"}, 
            {
            num: "c.",
            ans: "Niczyją"}],
        goodOne: "Taty Jędrka"
    },
    {
        num: 2,
        question: "Kim dla Jędrka jest Marcela?",
        answers: [
            {
                num: "a.",
                ans: "Siostrą"}, 
                {
                num: "b.",
                ans: "Koleżanką"}, 
                {
                num: "c.",
                ans: "Kuzynką"}],
        goodOne: "Kuzynką"
    },
    {
        num: 3,
        question: "Jak czasem nazywa rodziców Jędrek?",
        answers: [
            {
                num: "a.",
                ans: "Mamusia i Tatuś"}, 
                {
                num: "b.",
                ans: "Mamina i Padre"}, 
                {
                num: "c.",
                ans: "Po imieniu"}],
        goodOne: "Mamina i Padre"
    },
    // {
    //     num: 4,
    //     question: "W jakim mieście nie byli jeszcze Mazurscy?",
    //     answers: [
    //         {
    //             num: "a.",
    //             ans: "Wenecja"}, 
    //             {
    //             num: "b.",
    //             ans: "Berlin"}, 
    //             {
    //             num: "c.",
    //             ans: "Nowy Jork"}],
    //     goodOne: "Nowy Jork"
    // },
    // {
    //     num: 5,
    //     question: "Jakie rośliny uwielbia bunia?",
    //     answers: [
    //         {
    //             num: "a.",
    //             ans: "Róże"}, 
    //             {
    //             num: "b.",
    //             ans: "Kaktusy"}, 
    //             {
    //             num: "c.",
    //             ans: "Stokrotki"}],
    //     goodOne: "Kaktusy"
    // },
    {
        num: 4,
        question: "Jaką sławną osobę poznali w trzecim tomie Mazurscy?",
        answers: [
            {
                num: "a.",
                ans: "Królową Elżbietę"}, 
                {
                num: "b.",
                ans: "Stinga"}, 
                {
                num: "c.",
                ans: "Jennifer Aniston"}],
        goodOne: "Królową Elżbietę"
    },
    {
        num: 5,
        question: "Gdzie został ukryty obraz Porwanie Prozerpiny, w którego posiadanie przypadkiem weszła bunia w drugim tomie serii?",
        answers: [
            {
                num: "a.",
                ans: "W samolocie"}, 
                {
                num: "b.",
                ans: "W piwnicy"}, 
                {
                num: "c.",
                ans: "W parasolce"}],
        goodOne: "W parasolce"
    },
    {
        num: 6,
        question: "Czyje plany udaremnili Mazurscy w trzecim tomie?",
        answers: [
            {
                num: "a.",
                ans: "Gangu Niewidzialnych"}, 
                {
                num: "b.",
                ans: "Złodziei pieniędzy"}, 
                {
                num: "c.",
                ans: "Złodziei Samochodów"}],
        goodOne: "Gangu Niewidzialnych"
    },
    {
        num: 7,
        question: "W jakim kraju Mazurscy przejechali się pociągiem z filmów o Harrym Potterze?",
        answers: [
            {
                num: "a.",
                ans: "W Szkocji"}, 
                {
                num: "b.",
                ans: "W Hiszpanii"}, 
                {
                num: "c.",
                ans: "W Irlandii"}],
        goodOne: "W Szkocji"
    },
    {
        num: 8,
        question: "Jakie imię nadał Jędrek roślince, którą kupił w Padwie?",
        answers: [
            {
                num: "a.",
                ans: "Borys"}, 
                {
                num: "b.",
                ans: "Rosiczek"}, 
                {
                num: "c.",
                ans: "Parszywek"}],
        goodOne: "Rosiczek"
    },
    // {
    //     num: 11,
    //     question: "Jakim środkiem transportu nie podróżowała jeszcze rodzina?",
    //     answers: [
    //         {
    //             num: "a.",
    //             ans: "Rowerem"}, 
    //             {
    //             num: "b.",
    //             ans: "Samochodem"}, 
    //             {
    //             num: "c.",
    //             ans: "Balonem"}],
    //     goodOne: "Balonem"
    // },
    // {
    //     num: 12,
    //     question: "W jakim mieście Jędrek spotkał po raz pierwszy podejrzanego fakira?",
    //     answers: [
    //         {
    //             num: "a.",
    //             ans: "W Londynie"}, 
    //             {
    //             num: "b.",
    //             ans: "W Amsterdamie"}, 
    //             {
    //             num: "c.",
    //             ans: "We Frankfurcie"}],
    //     goodOne: "We Frankfurcie"
    // },
    {
        num: 9,
        question: "Jakim imieniem Mazurscy nazywają nawigację w swoim samochodzie?",
        answers: [
            {
                num: "a.",
                ans: "Marzenka"}, 
                {
                num: "b.",
                ans: "Agnieszka"}, 
                {
                num: "c.",
                ans: "Alicja"}],
        goodOne: "Marzenka"
    },
    {
        num: 10,
        question: "W jakim muzeum bohaterowie oglądali słynny obraz Leonarda da Vinci Mona Lisa?",
        answers: [
            {
                num: "a.",
                ans: "W Muzeum Narodowym"}, 
                {
                num: "b.",
                ans: "W Luwrze"}, 
                {
                num: "c.",
                ans: "W Musee d’Orsay"}],
        goodOne: "W Luwrze"
    },
    {
        num: 11,
        question: "Kto spośród rodziny jest niejadkiem?",
        answers: [
            {
                num: "a.",
                ans: "Mama"}, 
                {
                num: "b.",
                ans: "Bunia"}, 
                {
                num: "c.",
                ans: "Jędrek"}],
        goodOne: "Jędrek"
    },
    {
        num: 12,
        question: "Jakim środkiem transportu podróżują najczęściej bohaterowie?",
        answers: [
            {
                num: "a.",
                ans: "Rowerem"}, 
                {
                num: "b.",
                ans: "Pociągiem"}, 
                {
                num: "c.",
                ans: "Samochodem"}],
        goodOne: "Samochodem"
    },
    {
        num: 13,
        question: "Jaki bezcenny przedmiot został skradziony w trzecim tomie serii?",
        answers: [
            {
                num: "a.",
                ans: "Samochód Mazurskich"}, 
                {
                num: "b.",
                ans: "Kamień Przeznaczenia"}, 
                {
                num: "c.",
                ans: "Portret Mony Lisy"}],
        goodOne: "Kamień Przeznaczenia"
    },
    // {
    //     num: 18,
    //     question: "Dom jakiego artysty i wynalazcy zwiedzała rodzina w Amboise?",
    //     answers: [
    //         {
    //             num: "a.",
    //             ans: "Leonarda da Vinci"}, 
    //             {
    //             num: "b.",
    //             ans: "Michała Anioła"}, 
    //             {
    //             num: "c.",
    //             ans: "Rafaela Santi"}],
    //     goodOne: "Leonarda da Vinci"
    // },
    {
        num: 14,
        question: "Kto z członków rodziny najczęściej robi sobie selfie?",
        answers: [
            {
                num: "a.",
                ans: "Jędrek"}, 
                {
                num: "b.",
                ans: "Bunia"}, 
                {
                num: "c.",
                ans: "Marcela"}],
        goodOne: "Marcela"
    },
    {
        num: 15,
        question: "Jaki zamek bohaterowie odwiedzili w pierwszym tomie?",
        answers: [
            {
                num: "a.",
                ans: "Buckingham Palace"}, 
                {
                num: "b.",
                ans: "Zamek Książ w Wałbrzychu"}, 
                {
                num: "c.",
                ans: "Wersal"}],
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