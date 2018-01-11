using DataLayer.RepositoryConcrete;
using DataLayer.RepositoryInterface;
using ServiceLayer.ServiceConcrete;
using ServiceLayer.ServiceInterface;
using System.Web.Mvc;
using Unity;
using Unity.Mvc5;

namespace StackOverflow
{
    public static class UnityConfig
    {
        public static void RegisterComponents()
        {
			var container = new UnityContainer();

            // register all your components with the container here
            // it is NOT necessary to register your controllers

            // e.g. container.RegisterType<ITestService, TestService>();
            container.RegisterType<RISample, RCSample>();
            container.RegisterType<SISample, SCSample>();
            DependencyResolver.SetResolver(new UnityDependencyResolver(container));
        }
    }
}