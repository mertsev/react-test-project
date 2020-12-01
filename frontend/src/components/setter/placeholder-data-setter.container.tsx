import { connect } from 'react-redux';
import { placeholderDataRequestStartAction } from '../../actions';
import { PlaceholderDataComponent } from './placeholder-data-setter.component';

const mapDispatchToProps = (dispatch: (arg0: import("../../common").BaseAction) => any) => ({
  onRequestNewPosts: () => dispatch(placeholderDataRequestStartAction()),
});

export const PlaceholderDataSetterContainer = connect(
  null,
  mapDispatchToProps
)(PlaceholderDataComponent);
