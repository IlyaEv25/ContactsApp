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
    addEntry: boolean,
    editIndex: number
}


const initialState: State = {
    id : -1,
    ListData : {
        contacts : [], 
        searchWord : "", 
        searchList : []
     },
    addEntry : false,
    editIndex : -1
}

export {initialState as default};