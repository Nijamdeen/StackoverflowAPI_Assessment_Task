using ServiceLayer.ServiceInterface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using HelperModal;
using DataLayer.RepositoryInterface;

namespace ServiceLayer.ServiceConcrete
{
    public class SCSample : SISample
    {
        private RISample _RISample;
        public SCSample(RISample RISample)
        {
            _RISample = RISample;
        }
        public List<HMSample> GetSampleData()
        {
           return _RISample.GetSampleData();
        }
    }
}
