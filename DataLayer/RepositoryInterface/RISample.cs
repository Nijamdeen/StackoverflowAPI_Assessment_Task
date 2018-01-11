using HelperModal;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataLayer.RepositoryInterface
{
   public interface RISample
    {
        List<HMSample> GetSampleData();
    }
}
