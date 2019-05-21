import {
  Wakanow
} from '../src'

const wakanowNode = new Wakanow('development', '7kpFBfoQt5uGClMc9g4bh7t5feQId2yAMfhFcp53Wp0JolvMic4hqtc7PNQLDt8cxxVPTK7edHh4rQDpMmq1AxOZdHA7A-p-733Bk3U7iy0th0GVzIiWOJKOsx7tEntscwtIYIur6iDH7ssoPhWExP9fv-W7hWJNLV30dPltftjMoYCzj1pgEPtkah2eXVlSw9PG5yqXgaN2p5uRGtm1Yx28kmvg_3pn33lIrBwS2GiXrIUu22QtsB1Pm0MSIMjbmt5dB8uUTtV5qVmv5ZWcXTBNqEqZtTtkoNs47-AGL9nPrFu-PXldT7F6KpF-OZ49fl5bqhCUmXX9GP4prOpeiyaxi8f_fjigp7xn12b5Gk1LTgbNeT7vgchEoqKxp9SD3V9ufw4_6DNH1Ni5z-5XvEH6zUhIfj2DgqrpAl0CSvVfahaU24DExDkbOA9UnIZaKIg8dVVYi7TXC3nEEf1Isf_n4x7XP-z8AMVuekHzYLhEckyZcdGy3uYXb9UPQjOOMtRiLDVvSNkwXf7pVuQY--Bjr-nMoquKVAJMJ8O9A6pomnmw1NvvzT3ZR8LLETZG_eLdJrYTFYEzGNHFl8P1KmhAszLwelCFYvNngyGh3ch04uL1fUs_HktO3t5ZcHDsFWxcYrUwdtALOQO_vklyqfQEbPR4Uvwfab9t8Mb1w06B5D2GFSoPuZaTGEu2GtazAN5AWTcpnylvJdClzgD-s3hK-DJQTHu_m9Z9tgUl-UU4MunCeRliYmdrHEk5jNboRhn_KkvHQYjVJ_Y95JOs6o_Gz_cjJgniX7Xp3G8M9GBdbA-AylxpkkZCrz0_j2DgIQ4DUzjvBtlKUVXullkYFvFe-R9llToOL6BmvBRIR8A-Q-IEvil1YWdt7YaXK-689A35E17O5piPzWxiAZnGg8aE65MEjy8wdY-B7oqOZ_2QqMYPiQ2PBJHjiGAU44iVkO3n_HvEOhs3p7gBUu_WfjHShlM')

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
