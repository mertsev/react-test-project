import { connect } from 'react-redux';
import { State } from '../../reducers';
import { PlaceholderDataViewerComponent } from './placeholder-data-viewer.component';

const mapStateToProps = (state: State) => ({
  placeholderDataCollection: state.placeholderDataCollection,
});

const mapDispatchToProps = (dispatch: (arg0: import("../../common").BaseAction) => any) => ({});

export const PlaceholderDataViewerContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PlaceholderDataViewerComponent);
