using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CSharpInteropLib
{
    public class TfsWorkItemService : ITfsWorkItemService
    {
        public string CreateNewSupportIssue(dynamic param, params System.IO.Stream[] files) {
            throw new NotImplementedException();
        }

        public void CloseSupportWithUserInformation(string ticketNumber) {
            throw new NotImplementedException();
        }

        public string CloseSupportAndCreateBug(string ticketNumber) {
            throw new NotImplementedException();
        }
    }
}
