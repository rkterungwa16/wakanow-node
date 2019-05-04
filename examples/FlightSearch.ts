import {
  Wakanow
} from '../src'

const wakanowNode = new Wakanow('U8sIDvQjJFx7PuNqvn9Nz2RxXYbPsQIfVDhM8vHBMkl_VlC0Gsti-dPsrdd8GHjzHWyhaU2UcHbYtCwdoGhcBJbY8hYv2_X33tGOlc9d_HKq7TytgPm3GSPfHlAy85r8Tap1NY65KfZQcHS9o1whTzy_jVdwOcQHqudFzh0hh0GkV8pWB6WXBu0_Z6U0d_pgZYwfCbKqRovXBDiKnfcVe0PWiZDUeJ2ziiZmpnaz2h7mvvXiv0jJvdiFIzIfo6GmKSr3EwQjtvvvGODGmh59NsJZfvCkLjsqiuLCpCyroIqRRWJe00piggDjMYoR0kNa1OHiqsQG3W9iiTcDvwgfUsGCYjUEKs5cuLtecJOP4Pwm46RERJ5har1G-8qkc7a_RvHy4Uh-Fyy9HNWKVuzLs2QM044z6GpLqMIOfGkdynLrcjhXTin6q464RrvNheDGFuX_iXXgVCuCpWxmccCc5Xq0urH7rCz0WHp8IwcluyudYiRcd29681uSBVm2AQf5P-FMbfxNR6HnISzjeO9DAo95yeAfnLxmjjyNzCONU6DY29I3W-Hx9I4MxZ_qdFsFRV9xu42SMiq2sW30I9jHYT4DDvWubvMDh--Wr9HFfPIibWYMN6qRA8GBtkOtBn3hJ5VaHQ9WO6j_fNGMO7URguuUeQsGo1_YBGi1q4b3SvhW5grLDZHyACCF49qYikiAypbtk7HhVhvngd7a8eG_uOkIZnn9BQyx7jjVQoBVlxfKw3sCZDVjeM38DSQolONRz1jBzUmqLHjObZwCb5Wa7quoxqFEoyQU6xfWevWKZIJtELR0gtCrcmjH2VT3QLLFbmMwv88QYr-PHropU54RrJfOx5gzlqaTcc5KCWOHI1FTK4SLpgDMh-KqxnPYh7Lm3ow0uaeHayvHVAQqcqdsVe0TXjs9ZeyoE672NOuiDxv-uJxBxlT0sgdHNIgyujscJtcvlmZGL_0uHuVs0O8WyYu6aVs')

wakanowNode.FlightResource.flightSearch(
  {
    FlightSearchType: 'oneway',
    Adults: 1,
    Children: 0,
    Infants: 0,
    Ticketclass: 'Y',
    TargetCurrency: 'NGN',
    Itineraries: [
       {
         Departure: 'LOS',
         Destination: 'DXB',
         DepartureDate: '11/15/2019'
       }
    ]
  }
)
