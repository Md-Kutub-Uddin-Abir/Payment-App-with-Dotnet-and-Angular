using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PaymentApi.Model
{
    public class Paymentdetail
    {
        public int PaymentdetailId { get; set; }
        public string? CardOwnerName { get; set; }
        public string? CardNumber { get; set; }
        public string? ExpirationDate { get; set; }
        public string? SecurityCode{ get; set; }

    }
}