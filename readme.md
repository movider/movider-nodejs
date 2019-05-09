# movider-sdk-nodejs
Node.js SDK for Movider SMS API
# Getting Started
## Install
Using npm:
# Usage

## Create instance for using api
``` 
const Client = require('movider-sdk');

const smsClient = new Client({api_key: "Your API Key", api_secret: "Your Secret"});
```
## Send message
``` 
smsClient.sendMessage({

        "to": 'xxxxxxxxx, xxxxxxxxx, xxxxxxxxx',
        "text": "Sample Text",
        "callback_url": "http://your_callback.com",
        "callback_method": "post",
        "tag": "group01"

    }).then(response => {

        // Handle Success

    }).catch(error => {
    
        // Handle Error
  });

});
```

### Success Response
```
{
    success: true,
    data: {
        cmd: "SENDMSGOB",
        remaining_balance: 2.8295,
        total_sms: 1,
        phone_number_list: [
            {
                number: "66851807979",
                message_id: "SEKlObUO3iWqXKZ2z7MVf7",
                price: 0.0095
            }
        ],
        bad_phone_number_list: [ ]
    }
}

```
### Error Response
```
{
    success: false,
    error: "ERR_INVALID_RECEIVER_NUMBER",
    error_description: "Receivers number are invalid."
}
```

## Request OTP
``` 
smsClient.requestOtp({

        "to": "66874xxxx",
        "code_length": "6", // The length of the verification code
        "language": "en-gb",
        "next_event_wait": "200", // 200 second
        "pin_expire": "100", // 100 second
        "tag": "group01"

    }).then(response => {

        // Handle Success

    }).catch(error => {
    
        // Handle Error
  });

});
```

### Success Response
```
{
    success: true,
    data: {
        cmd: "SENDMSGVRF",
        request_id: "VtznKfqHUjmDCysZyOZDQX",
        number: "66877177214"
    }
}

```
### Error Response
```
{
    success: false,
    error: "ERR_INVALID_RECEIVER_NUMBER",
    error_description: "Receivers number are invalid."
}
```

## Verify OTP
``` 
smsClient.verifyOtp({

        "request_id": "VtznKfqHUjmDCysZyOZDQX",
        "code": "123456"

    }).then(response => {

        // Handle Success

    }).catch(error => {
    
        // Handle Error
  });

});
```

### Success Response
```
{
    success: true,
    data: {
        cmd: "ACKMSGVRF",
        request_id: "VtznKfqHUjmDCysZyOZDQX",
        price: 0.085
    }
}

```
### Error Response
```
{
    success: false,
    error: "ERR_INVALID_RECEIVER_NUMBER",
    error_description: "Receivers number are invalid."
}
```