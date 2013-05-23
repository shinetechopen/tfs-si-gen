using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CSharpInteropLib
{
    public interface ITfsWorkItemService
    {
        /// <summary>
        /// Create new support issue in tfs.
        /// </summary>
        /// <param name="param">support issue detail</param>
        /// <returns>SI number</returns>
        string CreateNewSupportIssue(dynamic param, params Stream[] files);

        /// <summary>
        /// Close support issue with User Information.
        /// </summary>
        /// <param name="ticketNumber">ticket number</param>
        void CloseSupportWithUserInformation(string ticketNumber);

        /// <summary>
        /// Close Support issue and open new bug.
        /// </summary>
        /// <param name="ticketNumber">ticket number</param>
        /// <returns>Bug number</returns>
        string CloseSupportAndCreateBug(string ticketNumber);
    }
}
