import React from 'react';
import { Field, reduxForm } from 'redux-form';

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';

import * as LicenceAgreementAction from "../../redux/licenceAgreement/actions";
import RenderTextField from '../common/RenderTextField';

export default class LicenceAgreement extends React.Component {

  constructor(props) {
    super(props); 
    this.handleClose = this.handleClose.bind(this);   
  }

  handleSubmit(e) {
    e.preventDefault();
  }


  handleOpen = () => {
    this.props.dispatch(LicenceAgreementAction.agreeLicenceAgreement());
  };

  handleClose = () => {
    console.log('handle close');
   /* this.props.dispatch(RegisterAction.setEmailOTPDialogShow(false));
    this.props.dispatch(RegisterAction.setMobileOTPDialogShow(false));*/
    // this.props.dispatch(RegisterAction.setOTPVerified(true));
    // this.setState({ open: false });
   // this.props.open = false;
   
   this.props.dispatch(LicenceAgreementAction.cancleLicenceAgreement());
   this.props.dispatch(LicenceAgreementAction.redirectLogin());
  };

  render() {
    const { handleSubmit, pristine, reset, submitting, valid } = this.props;
    const actions = [
      <FlatButton
        label='Cancel'
        onTouchTap={this.handleClose}     
        secondary={true}
      />,
      <FlatButton
        label='Agree'
        onTouchTap={this.handleOpen}         
        secondary={true}
      />
    ];

    return (
      <div>
        <Dialog
          title="Terms and Conditions"
          actions={actions}
          modal={false}
          open={this.props.open}
          onRequestClose={this.handleOpen} >

          <Card style={{ marginTop: 4, maxHeight: '224px', overflowX: 'hidden', overflowY: 'auto' }}>            
            <CardText style={{ position: 'relative', bottom: 5, left: 2, fontSize: '80%', fontStyle: 'normal', fontWeight: '500' }}>
              <p>
              One of the most important elements of a licensing agreement covers the financial arrangement. Payments from the licensee to the licensor usually take the form of guaranteed minimum payments and royalties on sales. Royalties typically range from 6 to 10 percent, depending on the specific property involved and the licensee's level of experience and sophistication. Not all licensors require guarantees, although some experts recommend that licensors get as much compensation up front as possible. In some cases, licensors use guarantees as the basis for renewing a licensing agreement. If the licensee meets the minimum sales figures, the contract is renewed; otherwise, the licensor has the option of discontinuing the relationship.
              </p>
              <p>
                  Another important element of a licensing agreement establishes the time frame of the deal. Many licensors insist upon a strict market release date for products licensed to outside manufacturers. After all, it is not in the licensor's best interest to grant a license to a company that never markets the product. The licensing agreement will also include provisions about the length of the contract, renewal options, and termination conditions.
              </p>
              <p>
                  Most licensing agreements also address the issue of quality. For example, the licensor may insert conditions in the contract requiring the licensee to provide prototypes of the product, mockups of the packaging, and even occasional samples throughout the term of the contract. Of course, the best form of quality control is usually achieved before the fact—by carefully checking the reputation of the licensee. Another common quality-related provision in licensing agreements involves the method for disposal of unsold merchandise. If items remaining in inventory are sold as cheap knockoffs, it can hurt the reputation of the licensor in the marketplace.
              </p>
              <p>
                Another common element of licensing agreements covers which party maintains control of copyrights, patents, or trademarks. Many contracts also include a provision about territorial rights, or who manages distribution in various parts of the country or the world. In addition to the various clauses inserted into agreements to protect the licensor, some licensees may add their own requirements. They may insist on a guarantee that the licensor owns the rights to the property, for example, or they may insert a clause prohibiting the licensor from competing directly with the licensed property in certain markets.  
              </p>              
            </CardText>
          </Card>
        </Dialog>       
      </div>
    );
  }
}
