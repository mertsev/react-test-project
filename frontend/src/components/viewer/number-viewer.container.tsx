import { connect } from 'react-redux';
import { State } from '../../reducers';
import { NumberViewerComponent } from './number-viewer.component';

const mapStateToProps = (state: State) => ({
  numberCollection: state.numberCollection,
});

const mapDispatchToProps = (dispatch: (arg0: import("../../common").BaseAction) => any) => ({});

export const NumberViewerContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(NumberViewerComponent);
