export type Contact = {
    id: number,
    name: string,
    data: string
  }

export type ListData = {
    contacts: Array<Contact>,
    searchWord: string,
    searchList: Array<Contact>
}

export type State = {
    id : number,
    ListData : ListData,
    addEntry: boolean
}


const initialState: State = {
    id : -1,
    ListData : {
        contacts : [], 
        searchWord : "", 
        searchList : []
     },
    addEntry : false
}

export {initialState as default};