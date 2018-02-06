import AsyncStorage from 'react-native'

export function getDecks() {
    // Deck inicial fornecido pelo udacity
    return [
        {
            title:'React',
            questions:[
                {
                    question:'What is React?',
                    answer:'A library for managing user interfaces'
                },
                {
                    question:'Where do you make AJAX requests in React?',
                    answer:'The componentDidMount lifecycle event'
                }
            ]
        },
        {
            title:'Javascript',
            questions:[
                {
                    question:'What is a closure?',
                    answer:'The combination of a function and the lexical environment within which that function was declared.'
                }
            ]
        }
    ]
}

export function getDeck(id){
   
    getDecks().filter((result)=>result.id===id)
}

export function saveDeckTitle(title){
   
}

export function addCardToDeck(title, card){
    
}