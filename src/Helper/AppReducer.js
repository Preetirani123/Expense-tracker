export default (state, action) => {
  switch(action.type) {
    case 'Delete':
      return {
        ...state,
        itemlist: state.itemlist.filter(item => item.id !== action.payload)
      }
      case 'Add_itemlist':
      return {
        ...state,
        itemlist: [action.payload, ...state.itemlist]

      }
    default:
      return state;
  }
}