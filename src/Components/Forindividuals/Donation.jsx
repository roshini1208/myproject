import React from 'react';
import './../Forindividuals/Donation.css';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

const Donation = () => {
  return (
    <div id="pay">
        <div>Payment Page</div>
        <div>
             <div>
             <FormControl>
                
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="female"
                  name="radio-buttons-group"
                >
                  <FormControlLabel value="female" control={<Radio />} label="UPI" />
                  <FormControlLabel value="male" control={<Radio />} label="Wallets" />
                  <FormControlLabel value="other" control={<Radio />} label="Net Banking" />
                  <FormControlLabel value="other1" control={<Radio />} label="Credit/Debit/ATM Card" />
                </RadioGroup>
              </FormControl>
             </div>
        </div>
    </div>
  )
}

export default Donation