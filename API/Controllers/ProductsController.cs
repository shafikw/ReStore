using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProductsController : BaseApiController
    {
        private readonly StoreContext _context;

        public ProductsController(StoreContext context)
        {
            _context = context;
        }

        [HttpGet("getProducts")]
        public async Task<ActionResult<List<Product>>> GetProducts()
        {
            // System.Threading.Thread.Sleep(1000);
            return await _context.Products.ToListAsync();
        }

        [HttpGet("getProduct/{id}")]
        public async Task<ActionResult<Product>> GetProduct(int id)
        {
            // System.Threading.Thread.Sleep(1000);
            var product = await _context.Products.FindAsync(id);

            if (product == null) return NotFound();

            return product;
        }
    }
}