import {
  Wakanow
} from '../src'

const wakanowNode = new Wakanow('development' ,'2lkJn9-Fh1OQfIUJ6DTCPTi3y_5zTvJThwpaT_zZeaLNMUbuJSOMavnxEl2Al8tT2d7xXoXh0p74ktIiSS5hyB8tWkFfU30X5gqu7iq128AzqeosUWj7w7beBMNg1S5Ldu7gjtOespVkHNUYpeB9fspVXgRgU75MJ-EWiQME7eRHxXF0FiQ6-A0uS9nh2WOn3omgeVtD_guykZVTDdYhOZzd04qYSVYZ6_pvjlpL3tY21QnMi6MfLPhlxMIOPZxBzXo2i_r_Txz6tdIWdAvzHXVds3QLXzhLwwZrFledGANGadnOc7qwpwHy3_AIfmKNvemDIZ_vXKhIYCwkLNiBxWd9CnJOsy1Sm1ZhrMzgDMf5NPc_Ofc3T0dBQddey1D8rW9czYuddNnFpipp4jKCPa7vD0-XZcolazwGhiHeonuvHCfWCF3N4p0N2WZ7Tv3seZgQzgtCSYyzzYd716pH5HrhQqPv8ec6rWuYlkD8fkaMxQgbxGuAZmjvbsbIRYJWATm3v18X6ke5raQCEI6omvb_yqwrPsDii4cS3uM3RhZnn7gOoaYd6TCv3V7E_VmVOJtuf1aL5t1diVZCLPJuPXynzAUbqhcHSeHfglG5dcg0wm9fX2zyUJPVnQoKpVf5KPVkh-5dhg9rGojT0vbsk377WiNbqVl7KbJR1W5GRP0a9wNifjTPfcDGS7jKbOUDb3SP5D9KNLRtZTAEGXPQF6YTj5sbMKLFJtuI33zZzXNIEmagNVItcdivp13Dq_5dQKzXyTvmN9uwR7YeBOx8TRbr4rV8ZAEu_dTe5iDP_5pF4NXqGK913RAnU--CxL9UBF3G94KE1GLlClXAzLf-Kbi5PKhoFJ5w-eMSKsI_fxTISVw_yaOJLr37ZvuLV1dYgUX19pnYfOHZhb93K8PN43FzOQgqsKa5vEYvVaGN3kkkQh4x8qVsr4Yg6VGyCN0I48XoW7YjVHllbWUxzmWnjiFMpKg')

wakanowNode.FlightResource.flightBooking(
  {
    PassengerDetails: [
      {
        PassengerType: 'Adult',
        FirstName: 'Adeniyi',
        MiddleName: '',
        LastName: 'Adedotun',
        DateOfBirth: '09/14/1990',
        PhoneNumber: '+0902343423',
        Address: 'No 43, Lagos Str.',
        PassportNumber: '',
        ExpiryDate: '',
        PassportIssuingAuthority: '',
        Email: 'olas1@gmail.com',
        Gender: 'Female',
        Title: 'Ms',
        City: 'nisun',
        Country: 'Nigeria',
        CountryCode: 'NG',
        PostalCode: '100001'
      }
    ],
      BookingItemModels: [
      {
      ProductType: 'Flight',
      BookingData:
      ' WAAAAB+LCAAAAAAABACrVgpOTSxKzvBOrVSyUnILzw8qTiwKDjEvdQ9zdw4pLE80CHFU0lFyy8lMzyjxTAGqSTM3sExMSjbSNTE2NNc1MbM01LVMMTfUTbY0TElOSzSzSDawUKoFAOx60KdYAAAA',
        BookingId: '1707310600002',
        TargetCurrency: 'NGN'
        }
      ],
     BookingId: '1707310600002'
   }
).then((response) => {
  console.log('response', response)
})
