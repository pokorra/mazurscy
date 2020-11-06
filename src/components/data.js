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
        num: 6,
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
        num: 7,
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
        num: 8,
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
        num: 9,
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
    {
        num: 10,
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
    }
];

const start = {
    date: "Premiera: 25 listopada 2020 r.",
    inv: `Czy masz ochotę na kolejną przygodę z rodziną Mazurskich? To świetnie! Zapraszamy Cię do podróży. Czy chcesz jako pierwszy dowiedzieć się, co spotka Was po drodze?
    Odpowiedz na pytania i odkryj pierwszy rozdział najnowszego tomu „Mazurskich w podróży”.`,
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