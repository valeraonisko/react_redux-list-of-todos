// import {connect} from 'react-redux';
// import ToolButtons from "./ToolButtons";
// import {getDeleteAction, load} from "../redux/actions";
//
// function mapStateToProps(state) {
//   return {
//     loadLabel: (state.requested) ? 'Loading...' : 'Load',
//     loadDisabled: (state.authorsList !== null || state.requested),
//     index: state.selectedIndex,
//     // authorsLength: (state.authorsList === null) ? 0 : state.authorsList.length,
//     // editDisabled: state.selectedIndex < 0
//   };
// }
//
// function mapDispatchToProps(dispatch) {
//   return {
//     load:() => dispatch(load()),
//     delete: index => dispatch(getDeleteAction(index)),
//     // cancel: dispatch(getCancelAction())
//   };
// }

// const ToolButtonsHandler = connect(mapStateToProps, mapDispatchToProps)(ToolButtons);
//
// export default ToolButtonsHandler;
