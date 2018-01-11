using DataLayer.RepositoryInterface;
using DB.Core;
using HelperModal;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Util;

namespace DataLayer.RepositoryConcrete
{
   public class RCSample: RISample
    {
        public List<HMSample> GetSampleData()
        {
            List<Sample> data = new List<Sample>();
            for (int i = 0; i < 10; i++)
            {
                data.Add(new Sample { SampleID = i, SampleName = "Sample" + i, SampleDescription = "Description of sample is " + i });
            }
            return STMapper.MapList<Sample, HMSample>(data);
        }
    }
}
