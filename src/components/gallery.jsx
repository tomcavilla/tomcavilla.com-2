import React from "react";

const images = [
  "https://lh3.googleusercontent.com/pw/AP1GczMaWBGhKPQDG0aZ4jOoGA3T8G3FVADrUotIvCsn9qyCi-s1rIe0QJU9nHYhkB03qHzmaz12jOOVpOXuvBj4QLUeC84-B8U4Y9p7Bl5m6-1Ao7I_klhuYCqGIJ2qSUz7l4dQazyWkFzEWZkPTv2j8TQ9=w1590-h1060-s-no-gm?authuser=0",
  "https://lh3.googleusercontent.com/pw/AP1GczOgDBh4AqK1J1RyZY3vbP3gMbEIUgFnF1JjkWadAFmRZEXcZ8qGjLx0sTcGIFeMQl2RsOrShXV4ipxKAI7IP5wu6PFnsY_nwnB19KPBOZa6jJNSqfkxfkxeCjb1UvM32awmRKFSjAGI5XECfZGuvQDU=w1590-h1060-s-no-gm?authuser=0",
  "https://lh3.googleusercontent.com/pw/AP1GczOHaSymyeiYhy4OrNZhPLkMgWMEmq95aRnwASn-bSoF99Rnfz0T18K8E8ru6XPA3OEfHvXHCF2Cl_E6Emr9pmzkZm70vihFbVirtPHqfrO5rlHKXA3YAN25-ZdoZXr2c19pWSMNYExZnn3mEVMgUFjJ=w1590-h1060-s-no-gm?authuser=0",
  "https://lh3.googleusercontent.com/pw/AP1GczOxOczr30a3javWwgN-Jm2ZeYHgAeFbBXlUKZow74Z_Vssbd4Fa-v0nzzboNAbhA-MCHSV_ItUQfmdF0-laLkmcJt0P54zXbPfWdQTNtZInD_XP5ZAVc0Acbn9eDTsDq0xZDhphzGyUhtFVTWw-mcrN=w1590-h1060-s-no-gm?authuser=0",
  "https://lh3.googleusercontent.com/pw/AP1GczNSkzJPy46xZv83wjIhHnkSSEFtEJzkHmmFDRbZEhsuXq1tMfzuU0eK4T8fdjIS5_K-2brrjd6g7l49T-T7FmSDjwUQObipCuMLu2cT0FYpg6f-RpH6vqelOQpJR64aav2b1EJn6oVIl__G_R0gAjBE=w1590-h1060-s-no-gm?authuser=0",
  "https://lh3.googleusercontent.com/pw/AP1GczOfV-hbprcuEp5lB6tRwStOqodlNOnBFJzO5DoBf4C04A_lokZi2yJOvLz6EcHosxiFW8IFs0W82VkRd18CuxfNu6WLAHhyuEhmximraW0BCoMwkXJAWN8SbB21E3fcODTVxqbZxdjPFq2DLeTu_TNj=w1590-h1060-s-no-gm?authuser=0",
  "https://lh3.googleusercontent.com/pw/AP1GczME_EPzIcMY9R06sKlg-NcUBInJYXipqfGrGS9JdIBCJmyrhXR2KcwvQH9vg5q97k1SVjpDQuzxOPZyv3m1nUwZP1UW5DfJOhrroHjy-kzrx9hjEcVUJEMNYjXxqUhHu1kV9ndnVSiSEG6GoaoTrF-G=w1590-h1060-s-no-gm?authuser=0",
  "https://lh3.googleusercontent.com/pw/AP1GczN_WAaQxaUxNXXfBF18SthYWOt6pp2MFgKDDORQMC0431DLQ7IsM3JYrqNlg_zBIOWvcUFaangUGyeAkBBykA06kfY58ffcyPRpy04FKs9LmbGSXkhk5I9rJWP0DjQOPUWCawZT6WyE0yGuTq_lDyUX=w1590-h1060-s-no-gm?authuser=0",
  "https://lh3.googleusercontent.com/pw/AP1GczO-hEOSkIpZA7GTDTZOriGSZB9Weh000OPAMHrd4dCgLTv-NQE63xA9xEqgl_Ty7cq-KvPVUCT-qFQJ3Z4ecQshWQCYHi5mnm89-PofPOWuP-fadk3ntNBqxN_MuSqKHJ1NqmMrKSY0hgI8D8nLbiId=w1590-h1060-s-no-gm?authuser=0",
  "https://lh3.googleusercontent.com/pw/AP1GczNqwvxRrCOmNpm_KZhorcEZhe482lOIz6J_uts0cvYcfF3r-qq21GHPQhAUR5L_W3VcIUAyfJPp7--mnVkix4PxO_5pytlHXWFGuEWWkFBBX0xPXuvkV4WpT4_uTLstlj3RQmIXA-c06UdPIR6snvia=w1590-h1060-s-no-gm?authuser=0",
  "https://lh3.googleusercontent.com/pw/AP1GczNpFkoMZVfdWbCxCsdLQ2-eIjy5MIqC5iu5sKnRkJI1xaiAyBQPU7TsmPit9yIjTLWI4oQeq_BSCzY6EyFfZHijRYhDXvWX9QVcUMPIVwgtv_CszGm52jgvbISstLt1qq_YR1wIYECehudDC5Qz8gtP=w1590-h1060-s-no-gm?authuser=0",
  "https://lh3.googleusercontent.com/pw/AP1GczNy9suvNH3hON0wj00xDp1zD0W0YNVgxUy_VooRYsh4-nIKa3yBJE71eiqytOTtODNTlqhITW_nWYrt5ulKHemh9VpzAJzUqU1_S-qS29RPTXwP14ha6v2ddwXXaILjuqC1VNeecJw592agaIx1aAuT=w1590-h1060-s-no-gm?authuser=0",
  "https://lh3.googleusercontent.com/pw/AP1GczMkdhJygkoMNZ3Voem1JQcGu1YOSkUEpSfCuognYVS99Irfr3XAIzuD3glAXbhZGaduAMvdfp4KIkR7ycn2aW4UA6g7k3raav6FLFWDTXW4WRc-GSB83AfaODb7BTRt7TTf-uGzlMQU1mzQpP7Js0sw=w1590-h1060-s-no-gm?authuser=0",
  "https://lh3.googleusercontent.com/pw/AP1GczORenw7E84TZK3rb4yicoAyUKhiBrccGmaMYFwFLiIPEd6veH_pybGin8CoUQZQutLt263zi5HaNm2VIQCuBI9VsoftLqCVIHIvFAOghxYs2T5T0cxc_Uxn35KJqtg6IKZ9cJ50tt6NuaZgZmaGkBPf=w1590-h1060-s-no-gm?authuser=0",
  "https://lh3.googleusercontent.com/pw/AP1GczPGevMld5xSTpcZSz4laOdvJ3qz6D2QzZpACyYpzwIuQArygE_cH3svXqrRU_B3IYEfpIZMAyvHhnl6BDmojaXgZXVet2HPHzIMAEjujYUb2-LNB7Kyu9EkQVhPOv2NGWLEDbhxVWWlLGQEdZ26LiN_=w1685-h1060-s-no-gm?authuser=0",
  "https://lh3.googleusercontent.com/pw/AP1GczPSoYUHHVGYtrsuRi7DG-SgqOllrsb0Pc5zDLt1raFJ3Ey_2HBiIfqUm0H2RV1XHgOpy6D42tuiOSgbiWSLx-PkWwATD3pETVEzaWTT_qm-JK4f7md59CuB4hsDkRBoqxYKOS1YJTfRzfMs3QnqBUFV=w1590-h1060-s-no-gm?authuser=0",
  "https://lh3.googleusercontent.com/pw/AP1GczNKoKcAJtWCstdezeTEdjah0MzRwKjZmvcJHBk7izUX6bpIpD-AUsmEzMOQTmo0vp_cs2p-ibQBv1TXYwXcrpN-E5malL5qpzcQ7MzB6MGvDKKw_jbqh3Lmaed4ayXcclP9ZPsg8yyHDlZBdY21sEx9=w1590-h1060-s-no-gm?authuser=0",
  "https://lh3.googleusercontent.com/pw/AP1GczMBiEPheS3LORdxVs5QgYApu4JUJ_mrTaalGL18S9MTbV4yy3r9ElrAuQmuntA--MY5yonZOWw5L62Ut_3uYMB1cUOxad5rndTcz_Hupe95WYrCFTjmaN1zGbCkiW7VwtBLtSic1mkfw_tzk-X5uVwt=w1590-h1060-s-no-gm?authuser=0",
];

function Gallery() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`Personal Work ${index + 1}`}
          className="w-full aspect-3/2 object-cover shadow"
        />
      ))}
    </div>
  );
}

export default Gallery;
