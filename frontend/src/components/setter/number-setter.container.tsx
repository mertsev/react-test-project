import { connect } from 'react-redux';
import { numberRequestStartAction } from '../../actions';
import { NumberSetterComponent } from './number-setter.component';

const mapDispatchToProps = (dispatch: (arg0: import("../../common").BaseAction) => any) => ({
  onRequestNewNumber: () => dispatch(numberRequestStartAction()),
});

export const NumberSetterContainer = connect(
  null,
  mapDispatchToProps
)(NumberSetterComponent);
