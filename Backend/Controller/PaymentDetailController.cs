using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PaymentApi.Model;

namespace PaymentApi.Controller
{
    [Route("api/[controller]")]
    [ApiController]
    public class PaymentDetailController : ControllerBase
    {
        private readonly PaymentDetailContext _context;

        public PaymentDetailController(PaymentDetailContext context)
        {
            _context = context;
        }

        // GET: api/PaymentDetail
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Paymentdetail>>> GetPaymentDetails()
        {
            return await _context.Paymentdetails.ToListAsync();
        }

        // GET: api/PaymentDetail/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Paymentdetail>> GetPaymentDetail(int id)
        {
            var paymentDetail = await _context.Paymentdetails.FindAsync(id);

            if (paymentDetail == null)
            {
                return NotFound();
            }

            return paymentDetail;
        }

        // POST: api/PaymentDetail
        [HttpPost]
        public async Task<ActionResult<Paymentdetail>> PostPaymentDetail(Paymentdetail paymentDetail)
        {
            _context.Paymentdetails.Add(paymentDetail);
            await _context.SaveChangesAsync();

            return Ok(await _context.Paymentdetails.ToListAsync());
        }

        // PUT: api/PaymentDetail/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutPaymentDetail(int id, Paymentdetail paymentDetail)
        {
            if (id != paymentDetail.PaymentdetailId)
            {
                return BadRequest();
            }

            _context.Entry(paymentDetail).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!_context.Paymentdetails.Any(e => e.PaymentdetailId == id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return Ok(await _context.Paymentdetails.ToListAsync());
        }

        // DELETE: api/PaymentDetail/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePaymentDetail(int id)
        {
            var paymentDetail = await _context.Paymentdetails.FindAsync(id);
            if (paymentDetail == null)
            {
                return NotFound();
            }

            _context.Paymentdetails.Remove(paymentDetail);
            await _context.SaveChangesAsync();

            return Ok(await _context.Paymentdetails.ToListAsync());
        }
    }
}
