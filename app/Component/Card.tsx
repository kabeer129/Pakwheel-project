
import React from "react";

export default function Card() {
  

    return (
     
      <div className="container mx-auto p-4">
      
      
      <div className="flex border-b">
        <button className="text-blue-500 py-2 px-4 border-b-2 border-blue-500">Popular</button>
        <button className="text-gray-500 py-2 px-4">Upcoming</button>
        <button className="text-gray-500 py-2 px-4">Newly Launched</button>
      </div>
    
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
      
        
        <div className="bg-white p-4 rounded-lg shadow-lg text-center">
          <a href="kia-sportage">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPdrHG5tY5qMYziHNfkH661hvdvt1Q846nuw&s"alt="Kia sportage" className="mx-auto mb-4 h-24"/>
          </a>
          <h3 className="text-lg  font-bold">KIA SPORTAGE</h3>   
          <p className="text-green-600">PKR 59.7 - 75.5 lacs</p>
          <p className="text-yellow-500">★★★☆☆ (621 Reviews)</p>
          
        </div>
        
      
    
        
        <div className="bg-white p-4 rounded-lg shadow-lg text-center">
          <a href="suzuki-alto">
         <img src="https://suzukifortmotors.com/wp-content/uploads/2020/12/Alto-Cerulean-Blue.jpg" alt="Suzuki Alto" className="mx-auto mb-4 h-24"/>
         </a>
          <h3 className="text-lg font-bold">Suzuki Alto</h3>
          <p className="text-green-600">PKR 23.4 - 30.3 lacs</p>
          <p className="text-yellow-500">★★★☆☆ (199 Reviews)</p>
        </div>
    
        
        <div className="bg-white p-4 rounded-lg shadow-lg text-center">
          <a href="honda-city">
          
          <img src="https://www.financialexpress.com/auto/images/model-media-1726215887395.jpg?w=480" alt="Honda City" className="mx-auto mb-4 h-24"/>
          </a>
          <h3 className="text-lg font-bold">Honda City</h3>
          <p className="text-green-600">PKR 48.5 - 58.1 lacs</p>
          <p className="text-yellow-500">★★★★☆ (458 Reviews)</p>
        </div>
    
      
        <div className="bg-white p-4 rounded-lg shadow-lg text-center">
          <a href="toyota-corolla">
          <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSEBUSEhISFRUWFRYVGBUVFRUXFRcWFRUWFhUVFRcYHSggGBolHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDQ0NFQ8PFS0dFR0rNzctKysrKysrNzErLS03Ny4rLTctLSsrNy8rLSw4Ny0tLS83LzcrNTgvKzcsOCs3K//AABEIAKUBMgMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAAAgMEBQYBBwj/xABHEAABAwIDAwgGBgkEAAcAAAABAAIDBBESITEFQVEGEyJhcYGRoQcyQlKxwRRicoLR8CMzU5KTorLC4RUkQ6MWNGNzs/Hy/8QAFwEBAQEBAAAAAAAAAAAAAAAAAAECA//EAB4RAQEBAAMAAgMAAAAAAAAAAAARAQISITFRA0GB/9oADAMBAAIRAxEAPwD3FCEIBCEIBCEIBCEIBCEIBCEIBCh7T2pDTM5yeVkbdLuNrng0auPUM1gduek45to4hb9rOD4tiBBI+0Wke6VYPSHvABJIAGZJNgBxJWW2n6Rdnw3An55w9mAGXTdjHQB6i4LyPa21pak3qJnzZ3AeRgGdxhjaAwEcQL5aqG6cq9Ur0Gu9MABtDQzOHGQlp/da0j+ZUlT6Wa93qU8TR1seT4l1vJY+eqANrqM+tHX4/wCFeuFaSp9Iu1n6SBg4NZEPMgnzVZUcrtqO1qZ/uyYf6SFUmqT0jw0XJN+1JgJtvbQOs9Se2Yn4vUGXbNSTZ0sl/rPLvgU3U1Zdk24HDeUuk2eXZn/H+VJ9BttdO7SSQ9mnfbTxS2STH/kf/EP9pKsTA1u4Htz/AMBK51XqIUfP/tJR9+b8ApdPUVGVqqcZbpZRpqPWSxKE1G7N3UQ8dh1+DvFNwTodtVzM21tV2GepI8OkFYQcuNqM0q3nqcGHzmjCr2PFtErGE64jRUXpX2i31mQSt3jmyXeMLyB4LR7K9MsLjhqaaSI7zE4StA4uBwuHYAV5u9rTqAe0A/FR6iEEW8L3IHdfo/dIPWp1WvovYfKWkrBemnjkNrlt7SAfWjdZze8K2Xya67XBzS4EZtc02e02zLS3M2zFxY9RGa3XJb0sVNPZlV/uotz7gTAcQ7ST72f1lke8IVPyc5TUtczHTyhxHrMOUjPtMOY7dDuKuEUIQhAIQhAIQhAIQhAIQhAIQhAIQhAIUav2hDAzHNLHE0e1I9rG+LivP+UPpZgbdlC3n36c68ObA08Ro6XsbYH3kHoNfXRQRmSaRkbBq55DR1C539S855Rek8m7KJlh+3lb5xxHPvfb7JXnG1tty1EnOVEzpXi9sRAay+6Ng6LOGQubZkqudVXNrrWYi0rdoPkeZJXvkkPtvN3W4Dc0fVaAOpRH1Cr5KoBRZKzgFpFm6pTTqlVgqid1+xK5/iCO0FQSnyX1AUKabPLQJb5hbI57kxFTk63A8+4FFPUz8762z/C6VNISeJ+A+QSXusLN/PWUQVMbL4zlli42Lm55Z+HBZochaG5nMqxjq7tCW6kpzx7i9Jj2YH3bE2U63whxsLZk3BtktZobbUXFzvz7tyhTTWKa2mJIZXRPGFzbX0ORaHNPDNrge9QTITqSqLD6UnKaq6faCPgR81V4kqGUYhmPzcfNTRcPqsIHh4ZfJN/6iOtNmkle04IpXfZY93DgO1Nf6RUDMwvb9u0f9ZCZomsrb6KNLWm57UmLZcp/ZDtnhP8AS8lLfsd++WH/ALnebYiPNKG21NwQT19WefxBKYkmtc95B0PX1Hr37+Knx7HAzdNfqjjc4/8AYWDipsUTI84mWd+0eQ+QfZyDWdoGIe8pu4K2lqJYJGyRmSKRtiD0mPFwCOsXBHaDwXrnI30tE4Yq9vVz7B5yMHxb4LyuaC5JJJJzJOZJOZuVDlY0b1kfW1JUslY2SN7XscLhzSC0jqITy+UNjcpamkJNNUSR3zIaQWE8Sx12k9ZC3ew/THVNIFQyGVtxdwaWPtvzBw37ghXuiFE2XtGOphZNC4PjeLgjwIPAg3BG4gqWihCEIBCEIBC49wAuSABvOi8y5YeldkTnQ7PY2eQZGZ1+YYfq2zlPZYdZQemSPDQXOIAAuSTYAcSVjdselHZsFw2Y1Dx7NMOc/wCzKMfvLxDbe1amrdirKh8udwwm0TfsxNs0dtieKrTO0ZNF0R6jtL0xzuuKakjjG587y898bLAfvFZbaPLjaM98dZI0H2YbRAdhZZ3iSsk+ocdAmnF5VKsJ8L3l7+m86ueS5x7SdUlzm/W7nvA8iq8h3FKjp3u0ugmdC97E9rnH4lBjjJ/VsJ7ASiLZx33+CkfR8I3D88SgbbE3XC3tt+KQ6NnAHsa342U6DZssgxMikc338J5vvkPRHeUqs2RLHAZ3ljWAZWJficTZrWvjBjJJ16dwLm2SCnmpmO1b/M7ysQAm2UrG6DzOqadK877dg/FAiJ1J8UErnQOAXDMO3sTTIApMbAoIU02enDt/OZSDnlzd721DtxvqrXmSR5+GaU6IDUgdpARUMSSnV1uxrT8wnYy/R0szm+6JCweFnDyThmiGsje43+CbdtCEb3HsafnZEPOZEc+ZLnHfJLI7qHqYEqNrRpBCPuvf5SucFDdtlg0Y49pA+F007bx9mNo7ST+CvouIi4aNiH2YYW/0sCfE0o1llA/9x4HheyzjttSn3R2N/G6f/wBbGH/ytM5/vOYHE9ZxXv4qC4ewSHpOxnrOI+aWYmt1LR2kBZ+r2zLJEIyI2Nyu2NjWDI3A6O7JVnNorXOrIR/yx9zgfgmnbYgHt37Gv/BZbAjAqjRScoIho2Q9zR8SlQ7YheCXyPhtpaJshPXcvAHZZZzm0tkKgu5NqQ824sfNI7djYxjb9eEX7rqnlrXu3N7gfxT0dOpTKIWubAdeSopjO6/+FN2Ntt9NKJAyN5HvtBt1t6+1PSUAOYIPYbqsqobFFzZte8+irlpLVVfNySMLHxuAGENONtnDTgA/Jeur5A5A7fbQ7RgqH3MbX9MDXC5pYXAb7B17b7L69jkDmhzSCCAQRmCDmCDwWOObnzrt+bnw57m8ePXz36pSEIWnELjjYXOQXV5t6VeXIgjkooLGZ7C17t0TXt0y1eQe4EHggp+X+25q2j52AuMBle0tZ6wiYSxrnAZ2c4Fx4AsBt0ifL2yEizBl1LdcleUtO2MxOZJG5kd2FuKRr2xsxODm3uyQWebtuHDI52ViyphbzxkipnmHA+R7m3wMey93lzQLkgkC9zdu9wvUebil3uPin4KYOyY0uPBoxHyW0dy3Yz9W3ZDM8jglnePuwQlt/v8AemZvSBUvIa2tmaDqKaghjb+9PKXAdeBCM/DydqnmzKSpN9P0MgB7yLKbHyDribPibEPrywA+BfceBVlT7ceRinrJ3uwgEOZK8ZO3kWGmeTbdSg7U247Dejc4kudicXMAw5YbNFraG9yezhCLCm9HL2npyQDrJlef/jDP5lPm5GxQA8/USCwxWEQbkNSHNdLpr6uQBOmayex53uc9tUXYHjFiZNECHNvk4DEXA33b/JzbO0KidxxzseXAtcXNlFmEg81EGssxgLWknES8sF7AlpC7ldsuLI87IQC44n5WaLk42OjF7C9i033A3F9ZT7Op20xqIYmNJZiBcYoy02yD5mtuGA5l1ybA2vkFhoNq00VOxjqd0kkbG3kAgY0lmeLG6792dwNdVk9vcqZqkCMuDIW+rFEC2JvXY5vO/E7fe2qKvto8oWQm0T3VVRvq5hia02t/ton3DB9d1yc7C1lla2tlnfjme97uL3Fx7LnO3kosSkix18VRxrFwvaN47s/gmaiS2psPj+eCgyVo9kd5/BBbNnbx8im6iQ+ye8FVTa47wPNTIJQ7TI8PzqoJ9ZVwmEMYyTnSGYnuL7BwHTDbykEE/VHcqoRKcGJJaqIZjXObUlwTbiga5tGBKuuFyIA1La1N3SmlAshJK6Ugooui65ZKa1B1oUmJl03GxXOzqYAYnaDNAzK0RtG9x0HAcSqqoq2g5m/nbqS9qVRc6w1dn2N3BRWUNxmfD/KgBUC+8cCPxCkl/OtIPrAeI42UGemLRcG4+CVRy2IPD4HIoITxmvrH0R1pm2JRvdqI3R90Mj4m+TAvlWubZ5X1X6I6fm9iUbeMbn/xJHv/ALkGvQhCBE8rWNc9xs1oLiToABcnwXylykqZJ6h9Y6KYiokfI2z7YWFxwswi+YFr7l9Eek+qMeyKst1dFzf8ZzYv715BWhkbYZMLZYSCxjmuBjNg0es0OBIAPR1Hcgx2z9rmGQPAma5uYJaDhPEcd4sdQSpe2OVjpwWuLQwuDi1rHND3Ma1rXSZ3cQGtAvkMItotRP8AQpP1bntIuQ0B2J2Qwtbdtr3JFrcO+NT7MDg1jojzt3E2zDgG3sAR0njP1Lgjhqm63w/Hy52Z5nzv6/usaza7RoGD7jlNotuC/SDT1tvl2gnNK2y1oLTG3CLHcLnTPLTzVW+ZxFjmOFgPgjEaCeskGbWMe3d07HwtbzUKTbz2etTkd+XiBZRqKpyt4j+4fP8ANnJZUR3/AMTH9mP3v8JDuUzv2Y8Sq6qjad2fUojYnE2bn2qiftDar5mgEYW30G8i1rqNGp9Zs0xsjORbJG2VpHa5kje1r2yN+6DvURjUU7GnS6wudBmm2BR9pPyDBvzPy/PUgizymR3VuHDtTkdHfXyUvZez3SODGC5PHIZC7nOO5oAJPYtBUUsEFK6cDnniTBdxszLBchmYt+kGt+7RQZR1CNzvH8Qo5u08CFtKr6IaWEysEc0mZdFkWtddzC5gsxwDcBNwCecHSFrrP7Y2c+J5jkHSADmmxAc1wu1wvnYjjoQQcwQgcppsbb7xke1dcoOy5OlbiPMfkqwcgYcEy4KQ5NOQNWXLJzCUttOTuQMWXQpjKBylRbLKCsslc2ro7Ms0k8F13Mt1kjvwxAnwCCnZTngpMdCTuUw7Up26EnsafnZNO28z2YnH7RA+F0D9Ns7PNP7UkDGCMe1r2D8+RVcduSHRrG+JP57lGfMXYnOJNmm/Wbaf460DWyqR1RNZur3ZdQG88AALnqCvppWmAila3GKlsRc8DHZ7bMJ90F2LIZdHioXJmlmMcz4GvdJHGLYPXaXSMaHDxI71YQUEjiZuaMLZ2YXMLHtEc8TmXljGE3a0O5wAaDG3VoxAjaMcdUaiSlhI+jtD34G9B0dumXNGTXCznXyuGuvcrLxw2c5o4Ajs/PwWxoDURCGmpg18Qc185iljfJK94AkxxtdjawAlgaQLhuYzIWYMOGQt90uj/dc4IIM8GdyfDMr6a9C23WVOyooxk+nHMvbv6PqO7C23eDwXza5t3BoBJcQAACSSTYAAZk3XtvoS5HVtNK+qna6CN8eAQvyfISQQ57PYDbGwNnZnQah7ChCEGN9Lrx/pMoJtikp2jt+kxH4ArwbaTmmNrmm2HEHOY6QEWdfpPjDmZ6nHG05m+eZ9X9OpqZI6eCCCeRpeZHOjifI3E0FrWnACQekTYjO+Wi8w2pyVr4ulPQVLTrzkILje2pMRIBtxzQURqZBmx7j1BsEx8Wm/8oTn+qztIcCARmCWTNcOzDp3FRam17OkNxlaaNrn9hc4Apkxn2eb7ucHkDZBNl2097i6TmiekbkS3Ljnclxzz1KbG0b+zDmRpiJzPDFmotnfl7/mV0YuB/iD4EoJh1uG4SN4YR/eQnJhcAjfu+P5/wDsxzUC9ukeyNpHk5WFBQySOaGsc55yaxrSXH7rQc+pBFjoic3bs+7rSb3c2NgN3HCLN+ZsOPFaRnJXaB0o58/eAZvv7RCWzkbtFsrXOijaGnFeSWnA0IIN5QdCdLIIpo3CgdHI0h9LUC4JBtFVszFxk79JCP4qzoatxUxCnpqoSy075JxCxsUMnOFvNytfdxbk0BrCddTYcFlwBwA7kESO3Uq2oN5XdWQ8Pz4q+xKknH6V/wBr5BBpdlSRQU450hv0lxj5wi/NxMcLPIAvgMgIcB0hzbHAG2F0KipnNfU0EjgOcDS1xPRa5hDmkO0wuZoRk6zLahXkuzNnvoKV9RVmF4jk6Ni7FeokJwc2HEWORxAZgWyvaDR11K8NhiMsgjBbzk7Yg+SN5F4GNs4NaDd4e49HMZYkEXZYifO6sqxamhIbHER+tda8UIGhDWYC7qDQfWBT+3tsmuhE5jjZzMmBoYxjAIZLusQwAGz7d73a3S+UNdURtZIYDJAXSdOeGGZvOYyx+CXCTmY95zw5ZWRPWxy7PmcyCKLOJt2swlzucY4CwcRbC1x03IMvSN/TW6/j/wDpWczLcTfjb5DrUCl/WE8LeQur1tNiGtjx1QRIaQuz3JRZE3V47rn4InjNsLpLt4WDR8c1GIiH/IP3gUEg1UQ0a93YAB5lNu2uBpEO93yATeKHt7A8/AJxrmbmOPdb+ohA27a0x0DR9ll/jdRzWzOy5x/ccHwsrWGBztIrdZdGPgSrCn2PK726dv2pJP7YikKyroHuNy1x6z0vxTgo37h43HyW8puSgd61bA37MMj/ADL2q2peRFIfX2k/7lOxv9T3pCvLW7Peerw/FOt2Y7iPMfJeyUvITZftVlW/qxQNH8sV/NWlNyF2LvMz/tVMw/ocEHhY2cfe8l2eDDE4D3Sesmy+hqfkZsQaU0LvtvkkPi9xXhfpP5MCir3iID6PKTJCW6AH14+rA42t7pbxQNckp5v0rKZ5ZK9gwEEA3D24gCdBg5y/VfddKe6aJs7p5pJpgxmJrnOdbphjWyOd0sXTc4N3Yel7qpti7QdBKyRhs5hBGveDbda4PUStF9DhdTSCCRofNIHESPawsDekAXO9fpZ3G698N7AH6XZbH1UksMkjBHLeoie5z/0WMfpmvObmkEXDsxiuC7PDsvRjyGp9pUL56kPaTWSvaYyGuLCxmJhJaejivpvGRzKxO03tEj4aMuklqsETrEENZ0BzDXDJ5cWNxO9W2Weo+huR9DFRUMFKHsJjZZxGjnuJdI4dri5A7ye5JUVCP9tTxsdaxkzdKb63kddxHVeyu0lrwdClIBCEIBCS91t4CZlx7kHamjjkFpI43j67Wu+IVBW8jdluvjoqUccMbWH+Wyn1ImtkbLKbXjmN7ytHa4D5oM36QuQtK2MS7PDGOaOnCHE4x7zMRPSHu7xpmM/GKisexxaWtuDbMOB8nL1DlCJG5Nkxk+6bgd43rF1uzpHm7+l2i6sRT0u1G/8AICM9WXP9RKtINt07M2umafeBc13ZcEZKI7Y491EdCGm+AHtF0gtW7Sa8XvUOvxkd/c9c/RnPmXHtLD8XqMZQNGef+Eh1U7c0easxEyaVxGFsZA6ubB/qTLYne4R2uj+TlDdVv6h3Js1UnE+SeKlVkhjAc5uRNsiD+dFTyyh0hcN9vIAfJSJ3ucCHEkKusWnNZ1ca7ZmzoqulvI8M+itcXZ2BjfIHNc42J9Z0l8IJ6LAM3C8ainbzVUYWlsccJBeRhfI9/RBIB6LAC6zATbIkuOaqdnVxjdiHCxB0c06tcN4yB6iARYgEaOCspTSuiYObMjrvxDEMi11mhuouxu4erkMygiUe0pqZlLLG4nE2SJ7dRI3GJrOa64fnUkWIIJCmctnQxllPA1rQ/BVSsbe0cj4WgRC5ytikNtA18YGhXH7dhhhZHGxs0kYtG9zMMcZN8TsORkfmBmAABv0WbdI57i9xLnOJcXHUkm5J70EiAMbnmSddF10jf/UPa91vC9kyAltYtMugMGjG/nuXXPHABONpzwTraFx9kpRFBSg5TmbJkPslSotgSn2UqxWRykaEjsUllU/3neKtoeTMh1CnQ8lXbyFKRQtq3+87xTzayT3ytLFyVG9ymRcmIxrcpSMmyul98+SfZtGb3z4D8FsYuT8Q9lTItjxjRgSkYQ7XqBo4+A/BRNo1FTUM5uRpe297Fuh3EHcdV6jFspu5g8FJGzcvVASkeGjk3OfVjd3hT6TkfVn2QB1r2RlJ1K2p6FrWmwBNnA3F8LgMTbbjo4KK8m2LyOnidju3FxOovrbgtrsyinZq8Hx/FaiOjDwbgAi1iBa5OgsO/wAEuGkz03oDZ88wFuj5/ir+hkc7W3ddQ4oVaUsdm9uaB5CEII1fHdhyvZU0732sCbDK2a0DxcFQpILoMzUQk6tB7WqBLRt/Zt8wta+jTD6FBjpdnRnVhHYfxUOXYUR94dov8Ftn0CYfs7qQYn/wvEd9+y3wUWo5GNPqu8Qt0/Z3UnYqcg6AkcQCD2hB5bUcjHjSxVbPyXkHsHwXtBhYfWit1scR/KbhINAw+q8djxh8xkg8Ml2C8eyVFk2K8eyV7nU7M95o7ciD2EZKDJshh9m3Yg8Rfsl/uHwTMmxJHZc2SvbH7Ebu8wojtmWNrK1I8cZyZmOjSn4+SM56l6/Bs0FwxXDbi5AvYX3BTJaV8bixpDbe5lcbjf2rggqK8hg5Fv8AacFYQ8jRvcV6yaUPawSC4bEXOd7eJz3BjQ7Xhlpa6qpdm4TxG4pRh4eScQ1uVNi5PRD2Fq2UKsBRgeyPBBj49lMGjB4KTHs4bmeS1IpfqpxtMeCDNM2edzfJSGbOdwWgFKU4KQoKJmzTxCebs3iVdCjPWnG0XUgp2UDetPMpG8FbCj6k62kQVTKce75J5sPUrNtKnW0yCtbAU4KbIq0bTpwQIKqmo+kMvyFMpqMg5jtUuOBPNZ1WQRGQYchrx6+r88UpsGam4V0MQMtiUpmiRZLCDqEIQCbLU4uEIGyxJMadsiyCOYkgwqVZFkEM0659GU2yLIIJp026l6lY4VwtQV/0fokdY+ajupVblibMaCoNIoj6HMrQGJNmFBVU9KWg2AIORadHZrrqEOGW7QHWxPq33i+h6yrdsOW7tSmxWQUtTSez2X6yG2HcM/EpDqK7dND+fkr1zOzuyKHR3GpPagoGUOeifFGrZsCWIUFU2kSxSqzESVzaCtFMlimVhgXcCCAKdKECm4F3CghiBKEKlYUYUEcRJQjT9kWQNhiUGpdkWQIwpQC7ZdsgTZdsuoQC6uBdQCEIQCEIQcQhCAQhCAQhCAsuWXUIOWXLJSECMK4WpxCBAauYUtCBJaiyUhBwBdsuoQcsiy6hAIQhAIQhAIQhAIQhAIQhAIQhAIQuoBCEIBCEIBCEIBCEIOIQhAIQhAIQhAIQhAIQhAIQhAIQhAIQhAIQhAIQhAIQhB1CEIBCEIOXQChCAQhCAC6hCAQhCAQhCD//2Q==" alt="Toyota corolla" className="mx-auto mb-4 h-24"/>
          </a>
          <h3 className="text-lg font-bold">TOYOTA COROLLA</h3>
          <p className="text-green-600">PKR 86.6 - 99.0 lacs</p>
          <p className="text-yellow-500">★★★☆☆ (357 Reviews)</p>
        </div>
      </div>
    
      
      <div className="text-right mt-4">
        <a href="#" className="text-blue-500">View All New Cars</a>
      </div>
    </div>
        
        
        
        
        
        
        
        


    
    
    
    

   
    );
  }
  