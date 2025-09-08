using System;
using Microsoft.EntityFrameworkCore;

namespace PaymentApi.Model;

public class PaymentDetailContext : DbContext
{
    public PaymentDetailContext(DbContextOptions options) : base(options)
    {

    }
    public DbSet<Paymentdetail> Paymentdetails{ get; set; }
}
