import { connect } from 'react-redux';
import { btcDataRequestStartAction } from '../../actions';
import { BtcDataComponent } from './btc-data-setter.component';

const mapDispatchToProps = (dispatch: (arg0: import("../../common").BaseAction) => any) => ({
  onRequestNewPriceData: () => dispatch(btcDataRequestStartAction()),
});

export const BtcDataSetterContainer = connect(
  null,
  mapDispatchToProps
)(BtcDataComponent);
